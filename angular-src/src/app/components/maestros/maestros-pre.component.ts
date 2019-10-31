import {Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit,OnDestroy,ChangeDetectionStrategy } from '@angular/core'; 
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-maestros-pre',
    templateUrl: './maestros-pre.component.html'
  //  providers:[PubSubService]
    //styleUrls: ['./maestros.component.css'],
})

export class MaestrosPreComponent implements OnInit {

       tipo:String;

    constructor(
    private router: Router,
    private flashMessage:FlashMessagesService,
    private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
    }
    }