import 'rxjs/add/operator/switchMap';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  ChangeDetectorRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  format
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarDateFormatter  
} from 'angular-calendar';
import { CustomDateFormatter } from './calendar-utils/custom-date-formatter.provider';
import { DatesService} from '../../services/dates.service';
import { Router, ActivatedRoute,NavigationEnd} from '@angular/router';
import { OnDestroy,OnInit } from '@angular/core'; 
import { fadeInAnimation } from '../_animations/index';
import { Subscription } from 'rxjs/Subscription';
import { PubSubService} from '../../services/pub-sub.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { letProto } from 'rxjs/operator/let';
import { PacienteService} from '../../services/paciente.service';
import { AuthService } from '../../services/auth.service';

import { colors } from './calendar-utils/colors'

  interface Date1 {
   start?: Date,
   end?: Date,
   title?: String,
   color?: any,
   actions?:any,
   resizable?:any,
   draggable?: Boolean
  } 

@Component({
  moduleId: module.id.toString(),
  selector: 'dashboard-component',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html',
  providers: [
   {
     provide: CalendarDateFormatter,
     useClass: CustomDateFormatter
   }
   ,PubSubService , DatesService, PacienteService
 ],
 // make fade in animation available to this component
 animations: [fadeInAnimation],
 
 // attach the fade in animation to the host (root) element of this component
 host: { '[@fadeInAnimation]': '' }

})

export class DashboardComponent implements OnInit,OnDestroy {
  dates: any = []
  events: Array<CalendarEvent<{date1:Date1}>>
  users: any
  datescount: Number=0;
  userId: String;
  date: any
  refresh: Subject<any> = new Subject();
  title:String;
  subscription: Subscription;
  activeDayIsOpen: boolean = true;
  locale: string = 'Sp' 
  view: string = 'week'
  viewDate: Date = new Date()
  name:String


  constructor(private route: ActivatedRoute,
    private datesService:DatesService,
    private router: Router,
    private pubSubService: PubSubService,
    private flashMessage: FlashMessagesService,
    private pacienteService: PacienteService,
    private authService: AuthService,
  ){
    this.subscription = this.route.params.subscribe(params => {
      this.name=String(this.route.snapshot.queryParams['name']);
      this.title='DOCTOR: ' + this.name.toUpperCase()
      this.userId = params['id']; // (+) converts string 'id' to a number
      this.pubSubService.publish('dates-updated');
    });
    }
    
    ngOnInit() {
      this.datesService.getDates(this.userId).subscribe(
        dates=> this.dates= dates,
        error => console.log("Error: ", error),
        () =>   this.fetchEvents(this.userId)
      )
        this.subscription = this.pubSubService.on('dates-updated').subscribe(() => 
        this.datesService.getDates(this.userId).subscribe(
          dates=> this.dates= dates,
          error => console.log("Error: ", error),
          () =>   this.fetchEvents(this.userId)
        )
      )
    }

  mostrar(){
    this.refresh.next(this.events)
  }
  
  fetchEvents(id){
    console.log(id)
    this.events=[]
    this.datescount=+this.dates.length
    console.log( this.dates,this.datescount)
    if (this.datescount>0){
      for(let i=0;i<this.datescount;i++){
        this.date=this.dates[i]
        var id=this.date.pac
        let color:any={}
        color['primary']=  this.date.co1?this.date.co1:colors.blue.primary
        color['secondary']=this.date.co2?this.date.co2:colors.blue.secondary
        let start:Date = new Date(this.date.start)
        let end:Date = new Date(this.date.end)
        let actions: CalendarEventAction[] = [{
            label: '<i class="fa fa-fw fa-pencil"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
              this.handleEvent('Edited', event,this.date._id);
            }
          },
          {/*  label: '<i class="fa fa-fw fa-times"></i>', onClick: ({ event }: { event: CalendarEvent }): void => {this.events = this.events.filter(iEvent => iEvent !== event);this.handleEvent('Deleted', event,date._id); */
          label: '<i class="fa fa-address-card-o" aria-hidden="true"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            this.handleEvent('Navigate', event,this.date.pac);
          }
        }]
        this.events.push(
          {
            start:start,
            end: end,
            title: this.date.nombreC||'sin nombre',
            color: color,
            actions: actions,
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          })
          this.refresh.next()
        }
      this.refresh.next(this.events)
      console.log( this.events)
      }
    }
         
    deleteDate(id){
      this.datesService.deleteDate(id)
        .subscribe(data =>{
      if(data.status=201){
          this.flashMessage.show('Cita eliminada con éxito', {cssClass: 'alert-success', timeout: 3000});
          this.refresh.next()
           this.pubSubService.publish('dates-updated');
      } else {
          this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 3000});
        }
      })
    }
    
  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event,'dav_idfake');
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent, id:String): void {
    console.log(id)
      switch(action){
        case 'Edited':
        this.router.navigate(['dashboard/date',id],{ queryParams: { name: this.name,user:this.userId }})
        console.log(action)
        break
        case 'Deleted':
        this.deleteDate(id)
        console.log(action)
        break
        case 'Navigate':
        this.router.navigate(['historia',id]) //,{ queryParams: { name: this.name,user:this.userId }})
        console.log(action)
        break
      }
  }

  dayClicked({
    date,
    events
  }: {
    date: Date;
    events: Array<CalendarEvent<{ date1: Date1 }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

eventClicked(event: CalendarEvent<{ date: Date1 }>): void {
    //let arr:=[]=event
    console.log(event)
    //event.actions.
    //this.router.navigate(['/historia','aaa'])
    }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    console.log('se destruyo el servicio')
    if(this.subscription){this.subscription.unsubscribe()}
   // if(this.subscription2){this.subscription2.unsubscribe()}
  }
}

    //No borrar es para extraer fecha de texto
    //let us=user.split(":")
    //let id=us[1].trim()
  // let arrtime=date.start.split("T")[1]
  // let arrdate = date.start.split("T")[0].split("-")
  // let  day = arrdate[2]; //the last array element (index: 2) is the day
  // let month = arrdate[1]-1; //the middle is the month
  // let year = arrdate[0]; //the year is the first element
  // let time = arrtime.split(":");
  // let hour = time[0];
  // let minute =time[1];
  // let second = time[2];
  // let start=new Date(year,month,day,hour,minute)
  // arrtime=date.end.split("T")[1]
  // arrdate = date.end.split("T")[0].split("-")
  // day = arrdate[2]; //the last array element (index: 2) is the day
  // month = arrdate[1]-1; //the middle is the month
  // year = arrdate[0]; //the year is the first element
  // time = arrtime.split(":");
  // hour = time[0];
  // minute =time[1];
  // second = time[2];
  // let end=new Date(year,month,day,hour,minute)
  //let nompac 
  
  //mi codigo ends 
   /*     
   si quisiera llamar a un http con parametros de fecha
   const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view]; */

    //@ViewChild('modalContent') modalContent: TemplateRef<any>

/*   save(): void {
    this.datesService.addDate(this.date)
    this.refresh.next();
  }

  externalEvents: CalendarEvent[] = [
    {
      title: 'Event 1',
      color: colors.yellow,
      start: new Date(),
      draggable: true
    },
    {
      title: 'Event 2',
      color: colors.blue,
      start: new Date(),
      draggable: true
    }
  ]; 

  eventDropped({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    const externalIndex: number = this.externalEvents.indexOf(event);
    if (externalIndex > -1) {
      this.externalEvents.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    this.viewDate = newStart;
    this.activeDayIsOpen = true;
  } 
  */
