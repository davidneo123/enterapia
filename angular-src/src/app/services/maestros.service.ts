import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MaestrosService {
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = false; // Change to false before deployment
  }

    addMaestro(maestro){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('maestros/maestro');
    return this.http.post(ep, JSON.stringify(maestro),{headers: headers})
      .map(res => res.json());
    }

    putMaestro(maestro){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('maestros/maestro');
    return this.http.put(ep, JSON.stringify(maestro),{headers: headers})
      .map(res => res.json());
    }

    getMaestros(tipo){
    let ep = this.prepEndpoint('maestros/maestrosAll/'+tipo);
    return this.http.get(ep)
      .map(res => res.json());
    }

    getMaestroById(id){
    let ep = this.prepEndpoint('maestros/maestro/'+ id);
    return this.http.get(ep)
      .map(res => res.json());
    }

    getMaestroByCod(cod){
    let ep = this.prepEndpoint('maestros/maestroCod/'+ cod);
    return this.http.get(ep)
      .map(res => res.json());
    }

    deleteMaestro(id){
    let ep = this.prepEndpoint('maestros/maestrosDel/'+ id);
    return this.http.delete(ep)
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