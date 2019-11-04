import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatesService {
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = false; // Change to false before deployment
  }

  addDate(date){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('dates/date');
    return this.http.post(ep, JSON.stringify(date),{headers: headers})
      .map(res => res.json());
    }

  putDate(date){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('dates/date');
    return this.http.put(ep, JSON.stringify(date),{headers: headers})
      .map(res => res.json());
    }

  getDates(user){
    let ep = this.prepEndpoint('dates/dates/'+user);
    return this.http.get(ep)
      .map(res => res.json());
    }

  /*getPenDates(pac){
      let ep = this.prepEndpoint('dates/datesNota/'+pac);
      return this.http.get(ep)     
      .map(res => res.json())
      .map((res: Array<any>) => res.filter(date => date.nota===undefined))
      }*/

  getDateById(id){
    let ep = this.prepEndpoint('dates/date/'+ id);
    return this.http.get(ep)
      .map(res => res.json());
    }

  deleteDate(id){
    let ep = this.prepEndpoint('dates/dateDel/'+ id);
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