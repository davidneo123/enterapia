import { Component, OnInit, Input } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {DatesService} from '../../services/dates.service'
import {Router, ActivatedRoute} from '@angular/router';
import { slideInOutAnimation } from '../_animations/index';
import { Subscription } from 'rxjs/Subscription';
import {FlashMessagesService} from 'angular2-flash-messages';
import {PacienteService} from '../../services/paciente.service';
import { setYear, getYear } from 'date-fns';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import { PubSubService} from '../../services/pub-sub.service';
import { AuthService } from '../../services/auth.service';
import { colors } from './calendar-utils/colors';
import { templateJitUrl } from '@angular/compiler';

class SearchItem {
  constructor(public _id: string,
              public name: string,
              public apellido1: string,
              public apellido2: string) {
  }
}

@Component({
  selector: 'app-date',
  moduleId: module.id.toString(),
  templateUrl: './date.component.html',
  styleUrls: ['../_content/app.less'],
  providers:[DatesService, PacienteService,PubSubService,AuthService],
    // make fade in animation available to this component
  animations: [slideInOutAnimation],
    // attach the fade in animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})

export class DateComponent implements OnInit {

   date: any = {};
   title:String = 'Agregar Cita';
   subscription: Subscription;
   validar:Boolean;
   user: any = {};
   pacientes =[];
   dateId:String;
   userId:String;
   fecha:any;
   start: String;
   end: String;
   paciente: any;
   name:String
   co1:String
   co2:String
   viewDate:Date
  horaIni:String
  horaFin:String

   private loading: boolean = false;
   private results: Observable<SearchItem[]>;
   private searchField: FormControl;

  constructor(
    private pubSubService: PubSubService,
    private validateService: ValidateService,
    private datesService:DatesService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage:FlashMessagesService,
    private pacienteService:PacienteService,
    private authService:AuthService,    
   ) {
   }

  ngOnInit() {
    let user=this.authService.UserData().getItem('user')
    this.viewDate=new Date(this.route.snapshot.queryParams['viewDate'],)
    this.horaIni=String(this.viewDate.toLocaleTimeString())
    this.fecha=String(this.viewDate.toLocaleDateString())
    console.log(this.horaIni+' '+this.horaFin + ' '+this.fecha)
    //No borrar es para extraer fecha de texto
    //let dated=datede.split(" ")
    /* let arrdate = viewD.split("T")[0].split("-")
    let  day = arrdate[2]; //the last array element (index: 2) is the day
    let month = arrdate[1]-1; //the middle is the month
    let year = arrdate[0]; //the year is the first element
    let time = arrtime.split(":");
    let hour = time[0]; */
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
    this.dateId=String(this.route.snapshot.params['id'])
    this.userId=String(this.route.snapshot.queryParams['user'])    
    this.name=String(this.route.snapshot.queryParams['name'])
    console.log(this.title)  
    this.getPacientes();
    if (this.dateId!=='new') {
      this.title = 'Editar Cita de ' + this.name.toUpperCase()
      this.getDateById(this.dateId)
    } else {
      this.title = 'Nueva Cita de ' + this.name.toUpperCase()
      this.date.co1=colors.blue.primary
      this.date.co2=colors.blue.secundary
     // this.fecha=this.viewDate
      this.start=this.horaIni.substr(1,)
      this.end=String(this.horaFin)
      let date =this.viewDate
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let dt = date.getDate();
      if (dt < 10) {
        var dia = '0' + dt;
      }
      if (month < 10) {
        var mes = '0' + month;
      }
      this.fecha= year+'-' + mes + '-'+dia
      }
    }

  getPacientes(){
  this.pacienteService.getPacientes().subscribe(res => {
      this.pacientes = res
    })       
  }
    
  getDateById(id){
    this.datesService.getDateById(id)
      .subscribe((data)=>{
        this.date=(data)
        this.paciente=this.date.pac
        this.co1=this.date.co1
        this.co2=this.date.co2
        console.log(this.date)
        let date=String(new Date(this.date.start)).split(' ')
        let endDate = String(new Date(this.date.end)).split(' ')
        this.fecha=new Date(date[0]+' '+date[1] + ' ' +date[2] + ' ' + date[3]).toISOString().slice(0,10)
        console.log(this.fecha)
        let start=date[4].slice(0,5)
        let end=endDate[4].slice(0,5)
        this.start=String(start)//.toISOString().slice(11,100)
        this.end=String(end)//new Date(date[0]+' '+date[1] + ' ' +date[2] + ' ' + date[3]+' '+end)//.toISOString().slice(11,100)
        console.log(this.start)
      })
    }

  addDate(paciente){
    console.log(this.authService.UserData)
    let paciente1 = this.pacientes.filter(iEvent => iEvent._id == paciente)    
    console.log(this.paciente)
    this.paciente=paciente1[0]
    let fechaini =new Date(this.fecha + ' '+this.start)
    let fechafin =new Date(this.fecha + ' '+this.end)
    console.log(fechaini+' '+fechafin)
    this.date.start= fechaini
    this.date.end=fechafin
    this.date.pac=paciente
    this.date.user=this.userId
    this.date.co1=this.co1
    this.date.co2=this.co2
    let nombre= this.paciente.nombres
    let nombreC=nombre.concat( ' ' , this.paciente.apellido1 ||''  , ' ' , this.paciente.apellido2 ||' ').trim()
    this.date.nombreC=nombreC
    this.date.nombreU=this.name
    console.log(this.date)
    // Required Fields
    if(!this.validateService.validateDate(this.date)){
      this.flashMessage.show('Por favor ingrese todos los campos de la cita', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }else{
      if(this.dateId=='new'){
      this.datesService.addDate(this.date)
      .subscribe(data =>{
        if(data.status=201){
          this.flashMessage.show('Cita registrada con éxito', {cssClass: 'alert-success', timeout: 9000});
          this.router.navigate(['/dashboard/dashboard',this.userId], { queryParams: { name: this.name } })
          this.pubSubService.publish('dates-updated');
        } else {
          this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 9000});
          this.router.navigate(['/dashboard/dashboard',this.userId], { queryParams: { name: this.name } })
        }
      })
    }else{
      this.datesService.putDate(this.date)
      .subscribe(data =>{
        if(data.status=201){
          this.flashMessage.show('Cita registrada con éxito', {cssClass: 'alert-success', timeout: 9000});
          this.router.navigate(['/dashboard/dashboard',this.userId], { queryParams: { name: this.name } })
          this.pubSubService.publish('dates-updated');          
        } else {
          this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 9000});
          this.router.navigate(['/dashboard/dashboard',this.userId], { queryParams: { name: this.name } })
        }
      })

    }
    }
  }
  deleteDate(id){
    //this.date.act=false
    this.datesService.putDate(id)
      .subscribe(data =>{
    if(data.status=201){
        this.flashMessage.show('Cita eliminada con éxito', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard/dashboard',this.userId], { queryParams: { name: this.name } })
         this.pubSubService.publish('dates-updated');
    } else {
        this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/dashboard/dashboard',this.userId], { queryParams: { name: this.name } })
      }
    })
  }
  // deleteDate(id){
  //   this.datesService.deleteDate(id)
  //     .subscribe(data =>{
  //   if(data.status=201){
  //       this.flashMessage.show('Cita eliminada con éxito', {cssClass: 'alert-success', timeout: 3000});
  //       this.router.navigate(['/dashboard/dashboard',this.userId], { queryParams: { name: this.name } })
  //        this.pubSubService.publish('dates-updated');
  //   } else {
  //       this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 3000});
  //       this.router.navigate(['/dashboard/dashboard',this.userId], { queryParams: { name: this.name } })
  //     }
  //   })
  // }
}