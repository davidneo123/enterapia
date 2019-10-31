  import { Component, OnInit, Input } from '@angular/core';
  import {ValidateService} from '../../services/validate.service'
  import {PacienteService} from '../../services/paciente.service'
  import {Router, ActivatedRoute} from '@angular/router';
  import { slideInOutAnimation } from '../_animations/index';
  import { Subscription } from 'rxjs/Subscription';
  import { FlashMessagesService } from 'angular2-flash-messages';
  import { MaestrosService } from '../../services/maestros.service'
  
  @Component({
    selector: 'app-paciente-view',
    moduleId: module.id.toString(),
    templateUrl: './paciente-view.component.html',
    styleUrls: ['./paciente-view.component.css'],
    providers:[PacienteService,MaestrosService]
  })
  
  export class PacienteViewComponent implements OnInit {
    title:String = 'Paciente ';
    paciente: any = {};
    pacienteDoc: any = {};
    validar:Boolean;
    id:String;
    barrios=[];
    generos =[];
    tipos =[];
    ciudades=[];
    estados=[];
    aseguradoras=[];
    vinculaciones=[];
    ocupaciones=[];
    parentezcos=[];
    localidades=[];
    subscription:Subscription
  
    constructor(
      private validateService: ValidateService,
      private pacienteService:PacienteService,
      private router: Router,
      private route: ActivatedRoute,
      private flashMessage:FlashMessagesService,
      private maestrosService:MaestrosService,
    //  private moment:Moment
     ) {
      if(this.route.firstChild!=null && this.route.firstChild!=undefined){
        this.subscription = this.route.firstChild.params.subscribe(params => {
     
        this.id=params['id']
        console.log(this.id)
        this.getPacienteById(this.id);
      })
      }
     
      } 
  
  ngOnInit() {
    this.maestrosService.getMaestros('tipdoc')
      .subscribe (resource =>{
        this.tipos=resource
    })
    
    this.maestrosService.getMaestros('genero')
      .subscribe (resource =>{
        this.generos=resource
    })

    this.maestrosService.getMaestros('ciudad')
    .subscribe (resource =>{
      this.ciudades=resource
    })

    this.maestrosService.getMaestros('estado_civil')
    .subscribe (resource =>{
      this.estados=resource
    })

    this.maestrosService.getMaestros('localidad')
    .subscribe (resource =>{
      this.localidades=resource
    })

    this.maestrosService.getMaestros('barrio')
    .subscribe (resource =>{
      this.barrios=resource
    })
    this.maestrosService.getMaestros('aseguradora')
    .subscribe (resource =>{
      this.aseguradoras=resource
    })
    this.maestrosService.getMaestros('vinculacion')
    .subscribe (resource =>{
      this.vinculaciones=resource
    })
    this.maestrosService.getMaestros('ocupacion')
    .subscribe (resource =>{
      this.ocupaciones=resource
    })
    this.maestrosService.getMaestros('parentezco')
    .subscribe (resource =>{
      this.parentezcos=resource
    })
    } 
        
    getPacienteById(id){
      this.pacienteService.getPacienteById(id)
        .subscribe((data)=>{
          this.paciente=(data)
          //console.log(this.paciente.fechanac)
          let a=this.paciente.fechanac
          console.log('fecha de nacimiento:'+ a)
          //this.paciente.fechanac=this.paciente.fechanac.moment.format("YYYY-MM-DD")
          //a=this.paciente.fechanac.toISOString().subString(0,10)
        })
    }

    ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
       console.log('se destruyo el servicio')
       if(this.subscription){this.subscription.unsubscribe()};
      }
}