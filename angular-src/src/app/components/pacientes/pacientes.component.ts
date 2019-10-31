import {PacienteService} from '../../services/paciente.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit,OnDestroy } from '@angular/core'; 
import { fadeInAnimation } from '../_animations/index';
import { Subscription } from 'rxjs/Subscription';
import {PubSubService} from '../../services/pub-sub.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-pacientes',
    templateUrl: './pacientes.component.html',   
    styleUrls: ['../_content/app.less'],
    // make fade in animation available to this component
    animations: [fadeInAnimation],
    providers:[PacienteService,PubSubService],
    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})

export class PacientesComponent implements OnInit,OnDestroy {
        pacientes: Array<any>;
        subscription: Subscription;
        title:String;
       // tipo: String;
        pacientescount: Number;
      //  @input()tipo: String;       

    constructor(
    private pacienteService:PacienteService,
    private router: Router,
    private pubSubService: PubSubService,
    private flashMessage:FlashMessagesService,
    private route:ActivatedRoute
    ) {/*this.router.events.subscribe(path => {
         this.onPacientes();
        //console.log('path = ', path);
        });*/
    }


    ngOnInit() {
        this.getPacientes();
        this.title = 'Pacientes';
        this.subscription = this.pubSubService.on('pacientes-updated')
            .subscribe(() => this.getPacientes());
    }
    
    getPacientes(){
        this.pacienteService.getPacientes().subscribe(res => {
            this.pacientes = res
            this.pacientescount=+this.pacientes.length
            console.log(this.pacientes)
        })       
    }
 
    deletePaciente(id){
        this.pacienteService.deletePaciente(id)
         .subscribe(data =>{
        if(data.status=201){
            this.flashMessage.show('Paciente eliminado con éxito', {cssClass: 'alert-success', timeout: 3000});
            this.pubSubService.publish('pacientes-updated');  
        } else {
            this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 3000});
         }
        })
    }
 
    ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    console.log('se destruyo el servicio')
    if(this.subscription){this.subscription.unsubscribe()};
    }
}