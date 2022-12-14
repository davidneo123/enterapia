import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = false; // Change to false before deployment
  }
    getUsers(){
    let ep = this.prepEndpoint('users/users/');
    return this.http.get(ep)
      .map(res => res.json());
    }

    deleteUser(id){
    let ep = this.prepEndpoint('users/usersDel/'+ id);
    return this.http.delete(ep)
        .map(res => res.json());
    }

      putUser(user){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/user');
    return this.http.put(ep, JSON.stringify(user),{headers: headers})
      .map(res => res.json());
    }

    getUserByUserName(username){
    let ep = this.prepEndpoint('users/user/'+username);
    return this.http.get(ep)
      .map(res => res.json());
    }

    getUserByDoc(doc){
    let ep = this.prepEndpoint('users/userDoc/'+doc);
    return this.http.get(ep)
      .map(res => res.json());
    }


    getUserById(id){
    let ep = this.prepEndpoint('users/register/'+ id);
    return this.http.get(ep)
      .map(res => res.json());
    }


  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/register');
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/authenticate');
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/profile');
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  UserData(){
    return localStorage
    //this.authToken = token;
    //this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  prepEndpoint(ep){
    if(this.isDev){
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }
}