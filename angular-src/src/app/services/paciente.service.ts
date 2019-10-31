import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class PacienteService {
  paciente: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = false; // Change to false before deployment
  }
    getPacientes(){
    let ep = this.prepEndpoint('pacientes/pacientes');
    return this.http.get(ep)
      .map(res => res.json());
    }

    getPacActivos(){
      let ep = this.prepEndpoint('pacientes/pacientes');
      return this.http.get(ep)     
      .map(res => res.json())
      .map((res: Array<any>) => res.filter(pac => pac.act===true))
      }

    deletePaciente(id){
    let ep = this.prepEndpoint('pacientes/pacientesDel/'+ id);
    return this.http.delete(ep)
        .map(res => res.json());
    }

    putPaciente(paciente){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('pacientes/paciente');
    return this.http.put(ep, JSON.stringify(paciente),{headers: headers})
      .map(res => res.json());
    }

    getPacienteByDoc(doc){
    let ep = this.prepEndpoint('pacientes/pacienteDoc/'+doc);
    return this.http.get(ep)
      .map(res => res.json());
    }

    getPacienteById(id){
    let ep = this.prepEndpoint('pacientes/paciente/'+ id);
    return this.http.get(ep)
      .map(res => res.json());
    }

    newPaciente(paciente){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('pacientes/pacientenew');
    return this.http.post(ep, paciente,{headers: headers})
      .map(res => res.json());
  }

   prepEndpoint(ep){
    if(this.isDev){
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }
}