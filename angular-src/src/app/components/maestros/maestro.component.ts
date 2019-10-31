import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {MaestrosService} from '../../services/maestros.service'
import {Router, ActivatedRoute} from '@angular/router';
import { slideInOutAnimation } from '../_animations/index';
import { Subscription } from 'rxjs/Subscription';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-maestro',
  moduleId: module.id.toString(),
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css','../_content/app.less'],
  providers:[MaestrosService],
    // make fade in animation available to this component
  animations: [slideInOutAnimation],
    // attach the fade in animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }
})

export class MaestroComponent implements OnInit {

   maestro: any = {};
   title:String = 'Agregar Maestro';
   subscription: Subscription;
   cod:String;
   maestroCod: any={};
   validar:Boolean;
   user: any = {};
   tipos =[];
   maestroId:String;
   maestroTipo:String;

  constructor(
    private validateService: ValidateService,
    private maestrosService:MaestrosService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage:FlashMessagesService,
   ) {
   }

  ngOnInit() {
    this.maestroId = String(this.route.snapshot.params['id']);
    this.maestroTipo = String(this.route.snapshot.queryParams['tipo']);
    if (this.maestroId!=='new') {
      this.title = 'Editar Maestro';
      this.getMaestroById(this.maestroId);
    } else {
      this.title = 'Agregar Maestro';
      this.maestro.act=true; 
      this.maestro.tipo=this.maestroTipo; 

    }
   } 
    
  getMaestroById(id){
    this.maestrosService.getMaestroById(id)
      .subscribe((data)=>{
        this.maestro=(data);
      })
    }

  addMaestro(){
   this.maestroTipo = String(this.route.snapshot.queryParams['tipo']);
 
    // Required Fields
    if(!this.validateService.validateMaestro(this.maestro)){
      this.flashMessage.show('Por favor ingrese código y descripción', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

   this.validateCod(this.maestroId,this.maestro.cod,this.maestroTipo)    
  }

   validateCod(maestroId,maestroCod,tipo){
      this.maestrosService.getMaestroByCod(maestroCod)
      .subscribe(data=>{
       this.maestroCod=data      
       if(this.maestroCod==null || this.maestroCod==undefined) {
       this.saveMaestro(maestroId)
       return true
       }else{if(this.maestroCod._id == maestroId){
         this.saveMaestro(maestroId)
         return true
         }else{if(tipo!==this.maestroCod.tipo){
                this.saveMaestro(maestroId)
                return true
            }
                else{
                this.flashMessage.show('Código de maestro ya existe, por favor ingrese otro', {cssClass: 'alert-danger', timeout: 3000});
                return false
                }
              }
           }
      })
   }

  saveMaestro(maestroId){
  if(maestroId=='new'){
     this.maestrosService.addMaestro(this.maestro)
       .subscribe(data =>{
        if(data.status=201){
          this.flashMessage.show('Maestro registrado con éxito', {cssClass: 'alert-success', timeout: 930000});
          this.router.navigate(['/maestros/maestro/', this.maestro.tipo]);
        } else {
          this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 930000});
          this.router.navigate(['/maestros/maestro/', this.maestro.tipo]);
        }
     })
     } else {
    this.maestrosService.putMaestro(this.maestro)
       .subscribe(data =>{
        if(data.status=201){
          this.flashMessage.show('Maestro actualizado con éxito', {cssClass: 'alert-success', timeout: 930000});
          this.router.navigate(['/maestros/maestro/', this.maestro.tipo]);
        } else {
          this.flashMessage.show('Algo salió mal :-(', {cssClass: 'alert-danger', timeout: 930000});
          this.router.navigate(['/maestros/maestro/', this.maestro.tipo]);
        }
       })
     }
   }
}