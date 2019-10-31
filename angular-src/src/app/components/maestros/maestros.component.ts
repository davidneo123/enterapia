import {MaestrosService} from '../../services/maestros.service';
import {Router, ActivatedRoute,NavigationEnd} from '@angular/router';
import { Component, OnInit,OnDestroy,ChangeDetectionStrategy } from '@angular/core'; 
import { fadeInAnimation } from '../_animations/index';
import { Subscription } from 'rxjs/Subscription';
import {PubSubService} from '../../services/pub-sub.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-maestros',
    templateUrl: './maestros.component.html',   
    styleUrls: ['../_content/app.less'],

    // make fade in animation available to this component
    animations: [fadeInAnimation],
    providers:[MaestrosService,PubSubService],
    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' },

 //   changeDetection: ChangeDetectionStrategy.OnPush
})

export class MaestrosComponent implements OnInit,OnDestroy {
        maestros: Array<any>;
        subscription: Subscription;
        title:String;
        tipo: String;
        maestroscount: Number;
      //  @input()tipo: String;       

    constructor(
    private maestrosService:MaestrosService,
    private router: Router,
    private pubSubService: PubSubService,
    private flashMessage:FlashMessagesService,
    private route:ActivatedRoute
    ) {this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd){
              this.onMaestros()
        //console.log('path = ', event)
            }
        })
    }

    onMaestros(){
    let tipo=String(this.route.snapshot.params['tipo']);
    this.tipo=tipo;
    this.title = 'MAESTRO '+ tipo.toUpperCase( );
    this.pubSubService.publish('maestros-updated');      
    }

    ngOnInit() {
        this.subscription = this.pubSubService.on('maestros-updated')
        .subscribe(() => this.getMaestros(this.tipo))
        this.onMaestros();
    }
    
    getMaestros(tipo){
        this.maestrosService.getMaestros(tipo).subscribe(res => {
            this.maestros = res
            this.maestroscount=+this.maestros.length
        })
    }
 
    deleteMaestro(id){
        this.maestrosService.deleteMaestro(id)
         .subscribe(data =>{
        if(data.status=201){
            this.flashMessage.show('Maestro eliminado con éxito', {cssClass: 'alert-success', timeout: 3000});
            this.pubSubService.publish('maestros-updated');  
        } else {
            this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 3000});
         }
        })
    }
 
    ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    //console.log('se destruyo el servicio')
    if(this.subscription){this.subscription.unsubscribe()};
    }
}