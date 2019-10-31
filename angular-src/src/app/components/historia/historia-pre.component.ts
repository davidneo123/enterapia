
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Component, OnInit,OnDestroy } from '@angular/core'; 
import {PacienteService} from '../../services/paciente.service';
//import {OrderByPipe} from '../../services/orderByPipe';
// import { relative } from 'path';
// import {AuthGuard} from '../../guards/auth.guard';
/* import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { concat } from 'rxjs/operator/concat'; */

@Component({
    moduleId: module.id.toString(),
    selector: 'app-historia-pre',
    templateUrl: './historia-pre.component.html', 
  styleUrls: ['./historia-pre.component.css'],
    providers:[PacienteService]
    //styleUrls: ['./maestros.component.css'],
})

export class HistoriaPreComponent implements OnInit {
  pacs: Array<any>
  title:String
  searchTerm:String=''
  items:any
  loading:Boolean
  //searchField = new FormControl();
  isMouseOver
  id:String  

  
    constructor(
    private router: Router,
    private pacService: PacienteService,
    ) {
        this.getPatients()
            // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
        
    }
    
    ngOnInit() {
        // this.user=null
        this.title = 'Buscar Paciente'
    }
    
    getPatients(){
        this.pacService.getPacActivos().subscribe(res => {
            this.pacs = res
        })
    }

    goToHistory(pac){
      console.log(pac)
      this.id=pac
        this.router.navigate(['historia',pac])//, {queryParams: {name:name}})
      }
     
     search(evento:KeyboardEvent){
       let itemsCopy=this.pacs
     //  this.searchTerm=(<HTMLInputElement>evento.target).value
       /* Perform a case-insensitive search:
       var str = "Mr. Blue has a blue house";
       var n = str.search(/blue/i); */
       let term = this.searchTerm.toUpperCase();
       this.items = itemsCopy.filter(function(tag) {
         if(tag){
           let nombre= tag.nombres?tag.nombres.toUpperCase()+' ':''
           nombre+=tag.apellido1?tag.apellido1.toUpperCase()+' ':''
           nombre+=tag.apellido2?tag.apellido2.toUpperCase():''
           nombre+=tag.id?' | '+tag.id:''
           console.log(nombre);
           
           return nombre.indexOf(term) >= 0;
          }
        }); 
        console.log(this.items)
      }

      onMouseOverOut(){
        this.isMouseOver= !this.isMouseOver
      }
}