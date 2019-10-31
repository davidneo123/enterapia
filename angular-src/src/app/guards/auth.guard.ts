import {Injectable} from '@angular/core';
import {Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  user:any
  super:boolean
  psico:boolean
  admon:boolean
  callback:boolean

  constructor(private authService:AuthService, private router:Router){
    
  }
  
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let roles = route.data["roles"] as Array<string>;
    if(this.authService.loggedIn()){
      return this.fetchRoles(this.authService.UserData().user,roles)
    } else {
      this.router.navigate(['/login'])
      return false
     }
  }

    fetchRoles(user,roles){
      this.callback=false
      this.user=JSON.parse(user)
      console.log(this.user)
      this.super = this.user.roles.super||false
      this.psico = this.user.roles.psico||false
      this.admon = this.user.roles.admon||false
      let list: String[] = ["nada","nada","nada"];
      if(this.super)list[0]="super"
      if(this.psico)list[1]="psico"
      if(this.admon)list[2]="admon"
      console.log(roles)
      list.forEach(element => {
      this.callback= (roles == null || roles.indexOf(element) != -1)
      if(this.callback) return true
    })
    console.log(this.callback)
    return this.callback
  }

}


