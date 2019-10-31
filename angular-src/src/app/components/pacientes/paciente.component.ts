import { Component, OnInit, Input } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {PacienteService} from '../../services/paciente.service'
import {Router, ActivatedRoute} from '@angular/router';
import { slideInOutAnimation } from '../_animations/index';
import { Subscription } from 'rxjs/Subscription';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MaestrosService } from '../../services/maestros.service'
//import { Moment } from 'moment'

@Component({
  selector: 'app-paciente',
  moduleId: module.id.toString(),
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css','../_content/app.less'],
  providers:[PacienteService,MaestrosService],//,PubSubService],
 
    // make fade in animation available to this component
  animations: [slideInOutAnimation],

    // attach the fade in animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})

export class PacienteComponent implements OnInit {

  //nacimiento: date
 
  title:String = 'Agregar Paciente';
  subscription: Subscription;
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

  constructor(
    private validateService: ValidateService,
    private pacienteService:PacienteService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage:FlashMessagesService,
    private maestrosService:MaestrosService,
   ) {
   
    } 

  ngOnInit() {
    //this.pacienteService.newPaciente(this.paciente)
    let pacienteId = this.route.snapshot.params['id'];
    if (pacienteId!=='new') {
    this.getPacienteById(pacienteId);
    this.title = 'Editar Paciente';
    } else {
     this.paciente.act=true; 
    }

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
    
  onRegisterSubmit(){
   let id =String(this.route.snapshot.params['id']);
   let email =String(this.paciente.email);
    // Required Fields
    if(!this.validateService.validatePaciente(this.paciente)){
      this.flashMessage.show('Ingrese el tipo y número de documento, los nombres y el primer apellido', {cssClass: 'alert-danger', timeout: 3000});
      return false
    }

  // Validate Email
  if(!this.validateService.validateEmail(email)){
    this.flashMessage.show('Por favor ingrese un email válido', {cssClass: 'alert-danger', timeout: 3000})
    return false
  }

     // Validate Identificacion    
 this.validateDoc(id,this.paciente.id) 
 }

  getPacienteById(id){
    this.pacienteService.getPacienteById(id)
      .subscribe((data)=>{
        this.paciente=(data)
        //console.log(this.paciente.fechanac)
        let a=this.paciente.fechanac
        console.log(a)
        //this.paciente.fechanac=this.paciente.fechanac.moment.format("YYYY-MM-DD")
        //a=this.paciente.fechanac.toISOString().subString(0,10)
      })
    }

   validateDoc(id,doc){
      this.pacienteService.getPacienteByDoc(doc)
      .subscribe(data=>{
       this.pacienteDoc=data   
      if(this.pacienteDoc==null || this.pacienteDoc==undefined) {
       this.savePaciente(id)
       return true
       }else{if(this.pacienteDoc._id == id){
         this.savePaciente(id)
         return true
         }else{
           this.validar=false  
            this.flashMessage.show('Número de documento ya existe, por favor ingrese otro', {cssClass: 'alert-danger', timeout: 3000});
           return false
          }
        }
      })
   }
   
   savePaciente(id){
     console.log(this.paciente.fechanac)
      if(id=='new'){
     this.pacienteService.newPaciente(this.paciente)
       .subscribe(data =>{
          if(data.success=true){
          this.flashMessage.show('Paciente registrado, ya puede iniciar la atención', {cssClass: 'alert-success', timeout: 930000});         
          this.router.navigate(['/maestros/pacientes'])
        } else {
          this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 930000});
          this.router.navigate(['/maestros/pacientes'])
        }
     })
     } else {
    this.pacienteService.putPaciente(this.paciente)
       .subscribe(data =>{
        if(data.success=true){
          this.flashMessage.show('Paciente actualizado con éxito', {cssClass: 'alert-success', timeout: 930000});   
          this.router.navigate(['/maestros/pacientes'])
        } else {
          this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 930000});
          this.router.navigate(['/maestros/pacientes'])
          }
      })
    }
  }



 // query = new Query();
/*   updateDate(source) {
  this.paciente.fechanac = source.target.valueAsDate;
  } */
  }