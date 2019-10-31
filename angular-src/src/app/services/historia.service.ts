import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HistoriaService {
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = false; // Change to false before deployment
  }

    addHistoria(nota){
      console.log(nota)
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('historias/nota');
    return this.http.post(ep, JSON.stringify(nota),{headers: headers})
      .map(res => res.json());
    }

    putHistoria(nota){
      console.log(nota)
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('historias/nota');
    return this.http.put(ep, JSON.stringify(nota),{headers: headers})
      .map(res => res.json());
    }

    getNotas(id){
    let ep = this.prepEndpoint('historias/notas/'+id);
    console.log(id)
    return this.http.get(ep)
      .map(res => res.json());
    }

    getHistoriaById(id){
    let ep = this.prepEndpoint('historias/nota/'+ id);
    return this.http.get(ep)
      .map(res => res.json());
    }

 /*    deleteHistoria(id){
    let ep = this.prepEndpoint('historia/historiaDel/'+ id);
    return this.http.delete(ep)
        .map(res => res.json());
    } */

  prepEndpoint(ep){
    if(this.isDev){
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }
}