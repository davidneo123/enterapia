import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service'
import { HistoriaService} from '../../services/historia.service'
import { Router, ActivatedRoute} from '@angular/router';
import { slideInOutAnimation } from '../_animations/index';
import { Subscription } from 'rxjs/Subscription';
import { PubSubService} from '../../services/pub-sub.service';
import { DatesService} from '../../services/dates.service';
import { MaestrosService} from '../../services/maestros.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Historia } from './historia.interface'

@Component({
  selector: 'app-nota',
  moduleId: module.id.toString(),
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css','../_content/app.less'],//,'../_content/app.less'
  providers:[HistoriaService,PubSubService,DatesService,MaestrosService],
    // make fade in animation available to this component
  animations: [slideInOutAnimation],

    // attach the fade in animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})

export class NotaComponent implements OnInit {
   nota: any={}
   title:String = 'Agregar Nota';
   fecha:Date=new Date()
   subscription: Subscription;
   nombreU: String
   nombreC: String
   dateId: String;
   notaId:String;
   userId:String;
   pacienteId:String
   toggleAnt:Boolean=true
   tipos =[]
   ant:any={}
   mat:any={}
   soc:any={}
   desempeno:any={}
   area:any={}   
   pariente:any={}
   parientes=[]
   convive:any={}
   conviven=[]   
   importante:any={}
   importantes=[]   
   colegio:any={}
   colegios=[] 
   universidad:any={}
   universidades=[] 
   trabajo:any={}
   trabajo1:any={}   
   trabajos=[] 
   aficion:any={}   
   aficiones=[] 
   anterior:any={}   
   anteriores=[] 
   futuro:any={}   
   futuros=[] 

  constructor(
    private validateService: ValidateService,
    private historiaService:HistoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private pubSubService: PubSubService,
    private flashMessage:FlashMessagesService,
    private dateService:DatesService,
    private maestrosService:MaestrosService
   ) { 
    if(this.route.parent!=null && this.route.parent!=undefined){
      this.subscription = this.route.parent.params.subscribe(params => {
      this.pacienteId=params['id']
    })
    }
   }

  ngOnInit() {
   this.maestrosService.getMaestros('tipnot')
    .subscribe (resource =>{
      this.tipos=resource
    })
   this.notaId = String(this.route.snapshot.params['id']);
   this.userId = String(this.route.snapshot.queryParams['user']);
   this.dateId = String(this.route.snapshot.queryParams['dateId']); 
   this.nombreU = String(this.route.snapshot.queryParams['nombreU']); 
   this.nombreC = String(this.route.snapshot.queryParams['nombreC']); 
   if (this.notaId!=='new') {
      this.title = 'Agregar evolución Doctor: '+this.nombreU;
      this.getHistoriaById(this.notaId);
    } else {
      this.nota.act=true 
      this.nota.pac=this.pacienteId
      this.nota.user=this.userId
      this.nota.nombreU=this.nombreU  
      this.nota.nombreC=this.nombreC  
      this.title = 'Agregar historia clinica Doctor: '+this.nombreU;
      console.log(this.nota)
    }
  } 

  getHistoriaById(id){
    this.subscription=this.historiaService.getHistoriaById(id)
      .subscribe((data)=>{
        this.nota=(data);
        this.parientes=data.parientes
        this.conviven=data.conviven     
        this.importantes=data.importantes                   
        this.colegios=data.colegios                   
        this.universidades=data.universidades                           
        this.aficiones=data.aficiones
        this.anteriores=data.aficionesanteriores                                   
        this.futuros=data.aficionesfuturas                                   
        this.trabajos=data.trabajos                                                                          
        this.trabajo=data.trabajo || {}                
        this.mat=data.matrimonio || {}
        this.soc=data.sociales || {}        
        this.ant=data.antecedentes || {}
        this.desempeno=data.desempeno || {}        
        this.area=data.areasajuste || {}                
      })
    }
  
  
markDate(notaId){
  this.dateService.putDate({nota:notaId,_id:this.dateId})
  .subscribe(data =>{
  if(data.status=201){
    this.flashMessage.show('Historia clínica registrada con éxito', {cssClass: 'alert-success', timeout: 930000});
    this.router.navigate(['/historia', this.pacienteId]);
    this.pubSubService.publish('notas-updated');
  } else {
    this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 30000});
    this.router.navigate(['/historia', this.pacienteId]);
  }
})
}

addArrays (){
//objetos:
this.nota.antecedentes=this.ant
this.nota.sociales=this.soc     
this.nota.matrimonio=this.mat
this.nota.desempeno=this.desempeno
this.nota.trabajo=this.trabajo  
this.nota.areasajuste=this.area  
this.nota.satisfaccionaficiones=Number(this.nota.satisfaccionaficiones)
//arrays:
this.nota.trabajos=this.trabajos
this.nota.parientes=this.parientes
this.nota.conviven=this.conviven
this.nota.importantes=this.importantes   
this.nota.colegios=this.colegios
this.nota.universidades=this.universidades
this.nota.aficionesanteriores=this.anteriores
this.nota.aficiones=this.aficiones
this.nota.aficionesfuturas=this.futuros

}

addNota(){
  this.addArrays()
  // Required Fields
  if(!this.validateService.validateHistory(this.nota)){
    this.flashMessage.show('Por favor ingrese todos los campos', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }
  if(this.notaId=='new'){
     console.log(this.nota)
    this.historiaService.addHistoria(this.nota)
    .subscribe(data =>{
      if(data.status=201){
        console.log(data)
     this.markDate(data._id)
      } else {
        this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 30000});
        this.router.navigate(['/historia', this.pacienteId]);
      }
   })
   } else {
    console.log(this.nota)
     this.subscription= this.historiaService.putHistoria(this.nota)
     .subscribe(data =>{
      if(data.status=201){
        this.flashMessage.show('Historia clínica actualizado con éxito', {cssClass: 'alert-success', timeout: 90000});
        this.router.navigate(['/historia', this.pacienteId]);
        this.pubSubService.publish('notas-updated');
        
      } else {
        this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 1000000});
        this.router.navigate(['/historia', this.pacienteId]);
      }
     })
    }
  }

  delAficion(ind){
    function deleteElem(element, index, array) { 
      return (ind !== index); 
    } 
    this.aficiones=this.aficiones.filter(deleteElem);
    console.log(this.aficiones)
        return false
    }
  
  addAficion(){
  if(this.aficion.tipo=="" ||  
    this.aficion.frecuencia==null || 
    this.aficion.satisfaccion==null)
    {
      alert("Debe ingresar todos los campos")
      return false
    }
    this.aficiones.push(this.aficion)
    this.aficion={}
    return false
  }

  delAnterior(ind){
    function deleteElem(element, index, array) { 
      return (ind !== index); 
    } 
    this.anteriores=this.anteriores.filter(deleteElem);
    console.log(this.anteriores)
        return false
    }
  
  addAnterior(){
  if(this.anterior.tipo=="" ||  
    this.anterior.frecuencia==null || 
    this.anterior.frecuencia==null)
    {
      alert("Debe ingresar todos los campos")
      return false
    }
    this.anteriores.push(this.anterior)
    this.anterior={}
    return false
  }

  delFuturo(ind){
    function deleteElem(element, index, array) { 
      return (ind !== index); 
    } 
    this.futuros=this.futuros.filter(deleteElem);
    console.log(this.futuros)
        return false
    }
  
  addFuturo(){
  if(this.futuro.tipo=="" ||  
    this.futuro.frecuencia==null || 
    this.futuro.satisfaccion==null)
    {
      alert("Debe ingresar todos los campos")
      return false
    }
    this.futuros.push(this.futuro)
    this.futuro={}
    return false
  }

  delTrabajo(ind){
    function deleteElem(element, index, array) { 
      return (ind !== index); 
    } 
    this.trabajos=this.trabajos.filter(deleteElem);
    console.log(this.trabajos)
        return false
    }
  
  addTrabajo(){
  if(this.trabajo1.entidad=="" ||  
    this.trabajo1.fecha==null || 
    this.trabajo1.fecha==undefined || 
    this.trabajo1.fecha=="" ||
    this.trabajo1.cargo=="" ||
    this.trabajo1.retiro=="")
    {
      alert("Debe ingresar todos los campos")
      return false
    }
    this.trabajos.push(this.trabajo1)
    this.trabajo1={}
    return false
  }

  delColegio(ind){
    function deleteElem(element, index, array) { 
      return (ind !== index); 
    } 
    this.colegios=this.colegios.filter(deleteElem);
    console.log(this.colegios)
        return false
    }
  
  addColegio(){
  if(this.colegio.edad==null ||  
    this.colegio.fecha==null || 
    this.colegio.fecha==undefined || 
    this.colegio.fecha=="" ||
    this.colegio.colegio=="" ||
    this.colegio.institucion=="")
    {
      alert("Debe ingresar todos los campos")
      return false
    }
    this.colegios.push(this.colegio)
    this.colegio={}
    return false
  }
  
  delUniversidad(ind){
  function deleteElem(element, index, array) { 
    return (ind !== index); 
  } 
  this.universidades=this.universidades.filter(deleteElem);
  console.log(this.universidades)
      return false
  }
  
  addUniversidad(){
    if( this.universidad.edad==null ||  
      this.universidad.fecha==null ||
      this.universidad.fecha==undefined ||
      this.universidad.fecha=="" ||
      this.universidad.carrera=="" ||
      this.universidad.institucion=="")
    {
      alert("Debe ingresar todos los campos")
      return false
    }
    this.universidades.push(this.universidad)
    this.universidad={}
    return false
  }

  delPariente(ind){
    function deleteElem(element, index, array) { 
      return (ind !== index); 
    } 
    //  this.parientes=this.parientes.filter(i => i!==index);
    this.parientes=this.parientes.filter(deleteElem);
    console.log(this.parientes)
        return false
  }

  addPariente(){
  if( this.pariente.nombre=="" ||  this.pariente.parentezco=="" ||
  this.pariente.edad==null ||
  this.pariente.ocupacion=="" ||
  this.pariente.satisfaccion==null)
  {
    alert("Debe ingresar todos los campos")
    return false
  }
  this.parientes.push(this.pariente)
  this.pariente={}
  return false
  }

 delConviven(i){
  function deleteElem(element, index, array) { 
    return (index !== i); 
  } 
  //  this.parientes=this.parientes.filter(i => i!==index);
  this.conviven=this.conviven.filter(deleteElem);
  console.log(this.conviven)
      return false
  }

  addConviven(){
    if( this.convive.nombre=="" ||  this.convive.relacion=="" ||
    this.convive.edad==null)
    {
      alert("Debe ingresar todos los campos")
      return false
    }
    this.conviven.push(this.convive)
    this.convive={}
    return false
  }

  delImportante(i){
    function deleteElem(element, index, array) { 
      return (i !== index); 
    } 
    //  this.parientes=this.parientes.filter(i => i!==index);
    this.importantes=this.importantes.filter(deleteElem);
    console.log(this.importantes)
        return false
  }

 addImportante(){
  if( this.importante.nombre=="" ||  this.importante.relacion=="" ||
  this.importante.edad==null)
  {
    alert("Debe ingresar todos los campos")
    return false
  }
      this.importantes.push(
        this.importante
      )
  this.importante={}
  return false
 }

/* 
validateNumber(value){
  console.log(value)
  switch (value){
    case 'edad':{
      if (Number(this.pariente.edad)<120 && Number(this.pariente.edad)>0){
        return true
      }
      this.pariente.edad=null
      // break
      return false
    }
    case 'satisfaccion':{
      if (Number(this.pariente.satisfaccion)<11 && Number(this.pariente.satisfaccion)>0){
        return true
      }
      this.pariente.satisfaccion=null
      break
    }
    default: { 
      //statements; 
      break; 
   } 
  }
}
  if (!Number(value) || value==null){

    return false
  }
  if (edad==true && value>0 && value<120){
    return true
  }
  if (value<10) return true
} */

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
     console.log('se destruyo el servicio')
     if(this.subscription){this.subscription.unsubscribe()}
    }
}