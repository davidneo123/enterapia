import { HistoriaService} from '../../services/historia.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit,OnDestroy } from '@angular/core'; 
import { fadeInAnimation } from '../_animations/index';
import { Subscription } from 'rxjs/Subscription';
import {PubSubService} from '../../services/pub-sub.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { DatesService} from '../../services/dates.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-historia',
    templateUrl: './historia.component.html',   
    styleUrls: ['../_content/app.less'],

    // make fade in animation available to this component
    animations: [fadeInAnimation],
    providers:[HistoriaService,PubSubService,DatesService],
    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})

export class HistoriaComponent implements OnInit,OnDestroy {
        historia: any=[];
        subscription: Subscription;
        dateSub: Subscription
        title:String;
        historiacount: Number;
      //  @input()tipo: String;
        dates: any = []
        private routeSub:Subscription;
        private id:String;

    constructor(
    private historiaService:HistoriaService,
    private router: Router,
    private pubSubService: PubSubService,
    private flashMessage:FlashMessagesService,
    private route:ActivatedRoute,
    private datesService:DatesService    
    ) {
        this.routeSub = this.route.params.subscribe(params => {
            this.title = 'Historia paciente '//+ tipo.toUpperCase( )
            this.id=params['id']
            this.pubSubService.publish('notas-updated')
          })
    }

    ngOnInit() {
        this.getNotas()
        this.subscription = this.pubSubService.on('notas-updated')
            .subscribe(() => this.getNotas());
        }
        
    getDates(id){
        this.dateSub= this.datesService.getPenDates(id).subscribe(res=>{
            this.dates=res
            console.log(this.dates)
        })
        
    }
    
    getNotas(){
        this.historiaService.getNotas(this.id).subscribe(res => {
            this.historia = res
            this.historiacount=+this.historia.length
            console.log(this.historia)
            this.getDates(this.id)
        })
    }
    
    ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
     console.log('se destruyo el servicio')
     if(this.subscription){this.subscription.unsubscribe()}
     if(this.dateSub){this.dateSub.unsubscribe()}
     if(this.routeSub){this.routeSub.unsubscribe()}  
    }
}