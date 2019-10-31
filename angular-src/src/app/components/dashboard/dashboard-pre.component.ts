import { Router } from '@angular/router';
import { Component, OnInit,OnDestroy, ChangeDetectorRef } from '@angular/core'; 
import {AuthService} from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import {PubSubService} from '../../services/pub-sub.service';
import { relative } from 'path';
import {AuthGuard} from '../../guards/auth.guard';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-dashboard-pre',
    templateUrl: './dashboard-pre.component.html',   
    providers:[AuthService,PubSubService]
    //styleUrls: ['./maestros.component.css'],
})

export class DashboardPreComponent implements OnInit {
  users: Array<any>
  user:any 
  userId: String
  subscription: Subscription
  title:String


    constructor(
    private router: Router,
    private authService: AuthService,
    private pubSubService: PubSubService,
    private cd: ChangeDetectorRef
    ) {
        this.getUsers()
            // override the route reuse strategy
       this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
    };
        
    }
    
    ngOnInit() {
       // this.user=null
        this.title = 'Agendamiento de citas'
    }
    
    getUsers(){
        this.subscription=this.authService.getUsers().subscribe(res => {
            this.users = res
        })
    }

    goToCalendar(user){
        this.userId=user._id
        let name=user.name
        this.router.navigate(['dashboard/dashboard',this.userId], {queryParams: {name:name}})
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
         console.log('se destruyo el servicio')
         if(this.subscription){this.subscription.unsubscribe()};
        }
}