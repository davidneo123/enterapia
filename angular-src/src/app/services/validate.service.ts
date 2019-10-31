import { Injectable } from '@angular/core';
import { AuthService} from '../services/auth.service';
import 'rxjs';


@Injectable()
export class ValidateService {
   user =<any> [];
   paciente =<any> [];
  //users: Array<any>;

  constructor(private authService:AuthService) { }

  validateEmail(email){
    if(!email){
      return true}else{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
  }

  validateRegister(user){
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
      return false
    } else {
      return true
    }
  }

  validateMaestro(maestro){
    if(maestro.cod == undefined || maestro.des == undefined){
      return false
    } else {
      return true
    }
  }

  validateDate(date){
    if(date.pac == undefined || date.start == null ||date.end == null || date.pac == null || date.start == undefined ||date.end == undefined){
      return false
    } else {
      return true
    }
  }
  
  validatePaciente(paciente){
    if(paciente.nombres == undefined || paciente.apellido1 == undefined || paciente.id == undefined || paciente.tip == undefined){
      return false
    } else {
      return true
    }
  }
  
  validateHistory(nota){
    if(nota.motivo == undefined || 
      nota.enfact == undefined || 
      nota.tipo == undefined 
      //nota.antecedentes == undefined
    ){
      return false
    } else {
      return true
    }
  }
}