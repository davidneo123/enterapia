webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var login_component_1 = __webpack_require__("./src/app/components/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/components/register/register.component.ts");
var users_component_1 = __webpack_require__("./src/app/components/register/users.component.ts");
var home_component_1 = __webpack_require__("./src/app/components/home/home.component.ts");
var profile_component_1 = __webpack_require__("./src/app/components/profile/profile.component.ts");
var maestros_component_1 = __webpack_require__("./src/app/components/maestros/maestros.component.ts");
var maestros_pre_component_1 = __webpack_require__("./src/app/components/maestros/maestros-pre.component.ts");
var maestro_component_1 = __webpack_require__("./src/app/components/maestros/maestro.component.ts");
var pacientes_component_1 = __webpack_require__("./src/app/components/pacientes/pacientes.component.ts");
var paciente_component_1 = __webpack_require__("./src/app/components/pacientes/paciente.component.ts");
var prueba_component_1 = __webpack_require__("./src/app/components/prueba/prueba.component.ts");
var item_component_1 = __webpack_require__("./src/app/components/prueba/item.component.ts");
var auth_guard_1 = __webpack_require__("./src/app/guards/auth.guard.ts");
var historia_component_1 = __webpack_require__("./src/app/components/historia/historia.component.ts");
var nota_component_1 = __webpack_require__("./src/app/components/historia/nota.component.ts");
var historia_pre_component_1 = __webpack_require__("./src/app/components/historia/historia-pre.component.ts");
var appRoutes = [
    //{path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    { path: '', pathMatch: 'full', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ["super", "psico", "admon"] } },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'profile', component: prueba_component_1.PruebaComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ["super"] } },
    { path: 'maestros', component: maestros_pre_component_1.MaestrosPreComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ["super", "admon"] },
        children: [
            { path: 'maestro/:tipo', component: maestros_component_1.MaestrosComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: 'maestro-edit/:id', component: maestro_component_1.MaestroComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: 'register', component: users_component_1.UsersComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: 'register-edit/:id', component: register_component_1.RegisterComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: 'pacientes', component: pacientes_component_1.PacientesComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: 'paciente-edit/:id', component: paciente_component_1.PacienteComponent, canActivate: [auth_guard_1.AuthGuard] }
        ]
    },
    { path: 'historia', component: historia_pre_component_1.HistoriaPreComponent, canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: ':id', component: historia_component_1.HistoriaComponent, canActivate: [auth_guard_1.AuthGuard],
                children: [
                    { path: 'nota/:id', component: nota_component_1.NotaComponent, canActivate: [auth_guard_1.AuthGuard]
                    }
                ]
            }
        ]
    },
    //{ path: 'dashboard', loadChildren: 'app/components/dashboard/dashboard.module#DashboardModule' , canActivate:[AuthGuard],data: { roles: ["super","admon"] } },
    //{ path: 'historia', loadChildren: 'app/components/historia/historia.module#HistoriaModule' , canActivate:[AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
//Solo con modulos se puede hacer lazy load. Se encapsula en modulos y no se importa, sino que se 
//referencia la ruta del modul que solo se carga al llamarlos:
//path:'ejemplo', loadChildren:'../../about/about.module#AboutModule'
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule],
            providers: [auth_guard_1.AuthGuard]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routedComponents = [
    navbar_component_1.NavbarComponent,
    login_component_1.LoginComponent,
    register_component_1.RegisterComponent,
    users_component_1.UsersComponent,
    home_component_1.HomeComponent,
    maestros_component_1.MaestrosComponent,
    maestro_component_1.MaestroComponent,
    maestros_pre_component_1.MaestrosPreComponent,
    paciente_component_1.PacienteComponent,
    pacientes_component_1.PacientesComponent,
    profile_component_1.ProfileComponent,
    prueba_component_1.PruebaComponent,
    item_component_1.ItemComponent
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* body {\n  padding-top: 70px;\n  padding-bottom: 30px;\n}\n\n.theme-dropdown .dropdown-menu {\n  position: static;\n  display: block;\n  margin-bottom: 20px;\n}\n\n.theme-showcase > p > .btn {\n  margin: 5px 0;\n}\n\n.theme-showcase .navbar .container {\n  width: auto;\n}\n\n#contenedor div{ float:left; } */"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<main>\n    <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// import '../assets/js/jquery.min.js';
// import '../assets/js/bootstrap.min.js';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Funciona la App!';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var historia_module_1 = __webpack_require__("./src/app/components/historia/historia.module.ts");
//import { DashboardModule} from './components/dashboard/dashboard.module';
var validate_service_1 = __webpack_require__("./src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var auth_guard_1 = __webpack_require__("./src/app/guards/auth.guard.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_routing_module_1.routedComponents
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                angular2_flash_messages_1.FlashMessagesModule,
                animations_1.BrowserAnimationsModule,
                // DashboardModule,
                historia_module_1.HistoriaModule,
            ],
            providers: [validate_service_1.ValidateService, auth_guard_1.AuthGuard, auth_service_1.AuthService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/_animations/fade-in.animation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import the required animation functions from the angular animations module
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
exports.fadeInAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
animations_1.trigger('fadeInAnimation', [
    // route 'enter' transition
    animations_1.transition(':enter', [
        // css styles at start of transition
        animations_1.style({ opacity: 0 }),
        // animation and styles at end of transition
        animations_1.animate('.3s', animations_1.style({ opacity: 1 }))
    ]),
]);


/***/ }),

/***/ "./src/app/components/_animations/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/components/_animations/fade-in.animation.ts"));
__export(__webpack_require__("./src/app/components/_animations/slide-in-out.animation.ts"));


/***/ }),

/***/ "./src/app/components/_animations/slide-in-out.animation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
exports.slideInOutAnimation = animations_1.trigger('slideInOutAnimation', [
    // end state styles for route container (host)
    animations_1.state('*', animations_1.style({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    })),
    // route 'enter' transition
    animations_1.transition(':enter', [
        // styles at start of transition
        animations_1.style({
            // start with the content positioned off the right of the screen, 
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        animations_1.animate('.5s ease-in-out', animations_1.style({
            // transition the right position to 0 which slides the content into view
            right: 0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),
    // route 'leave' transition
    animations_1.transition(':leave', [
        // animation and styles at end of transition
        animations_1.animate('.5s ease-in-out', animations_1.style({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 1)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/components/_content/app.less":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files\n*/\n.form-group {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n}\nh2 {\n  padding: 0;\n  margin: 0;\n}\nh3 {\n  padding: 0;\n  margin: 0;\n}\ntextarea#nota {\n  border: none;\n  width: 100%;\n  height: 100%;\n  margin-left: 10%;\n  margin-right: 10%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  padding-right: 1%;\n}\n.main_content {\n  background-color: cadetblue;\n  color: black;\n  border-color: beige;\n  padding-left: 10px;\n  padding: 0;\n  margin: 0;\n  table-layout: auto;\n}\n.bloque {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: auto;\n}\n.nota {\n  padding-left: 10px;\n  background-color: aliceblue;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  border-left: black;\n}\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.side-form {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  right: 0;\n  width: 95%;\n  height: 100%;\n  overflow: auto;\n  background: #d9f3f5;\n  padding: 20px;\n  border-left: 1px solid #e0e0e0;\n}\n#contenedor div {\n  float: left;\n  padding: 8px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.highlight {\n  background-color: yellowgreen;\n  font-weight: bold;\n}\n.control-label {\n  color: black;\n}\n.page-header {\n  color: black;\n}\n/* GENERAL STYLES AND CLASSES \n--------------------------------------------------------------------- */\nbody {\n  padding: 5px;\n}\nbody ng-component {\n  display: block;\n}\n/* HEADER STYLES\nheader {\n}\n--------------------------------------------------------------------- */\n/* MAIN STYLES\n--------------------------------------------------------------------- */\nmain {\n  padding: 0 20px;\n  min-height: 300px;\n  /* side form */\n}\nmain .generic-table {\n  margin-top: 20px;\n}\nmain .generic-table .delete-column {\n  width: 60px;\n}\nmain .view-side-form .side-form {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  right: 0;\n  width: 80%;\n  height: 100%;\n  overflow: auto;\n  background: #fff;\n  padding: 20px;\n  border-left: 1px solid #e0e0e0;\n}\n/* FOOTER STYLES\n--------------------------------------------------------------------- */\nfooter {\n  text-align: center;\n  margin-top: 20px;\n  padding: 20px;\n  border-top: 1px solid #ddd;\n}\n"

/***/ }),

/***/ "./src/app/components/historia/historia-pre.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n/* Create two unequal columns that floats next to each other */\n\n.column {\n    float: left;\n    padding: 10px;\n    /* height: 300px; Should be removed. Only for demonstration */\n}\n\n.left {\n  width: 20%;\n}\n\n.right {\n  width: 80%;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}"

/***/ }),

/***/ "./src/app/components/historia/historia-pre.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"column left\" style=\"background-color:gray;color:black;padding:20px;margin-bottom: 15px;\">\n  <div class=\"container\" id=\"contenedor\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title\">{{title}}</h3>\n          <form class=\"form-inline\" autocomplete=\"off\">\n            <div class=\"form-group\">\n              <input type=\"search\"\n              class=\"form-control\"\n              placeholder=\"Ingrese nombre o cédula\"\n              [(ngModel)] = \"searchTerm\" (ngModelChange) = \"search()\" name=\"pac\"><!-- [formControl]=\"searchField\" -->\n            </div>\n            <div class=\"text-center\">\n                <p class=\"lead\" *ngIf=\"loading\">Cargando...</p>\n              </div>\n              <h6 class=\"card-subtitle mb-2\" *ngIf=\"searchTerm!==''\">Nombre | Cedula</h6>\n              <ul class=\"list-group\" style=\"width:250px;\">\n                <li class=\"list-group-item\"\n                *ngFor=\"let pac of items\">\n                  <a\n                  (click)=\"goToHistory(pac._id)\" style=\"cursor: pointer;\">\n                  <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i>\n                  {{pac.nombres}} {{pac.apellido1}} {{pac.apellido2}} | {{pac.id}}\n                  </a>\n                </li>\n              </ul>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div id=\"contenedor\">\n      <app-paciente-view></app-paciente-view>\n    </div>\n  </div>\n  <!-- <div class=\"clearfix visible-xs\"></div>     -->\n\n    <div class=\"column rigth\">\n        <router-outlet></router-outlet>\n    </div>\n\n<!-- <input type=\"text\" (keyup)=\"onKeyUp($event)\"/>\n\n<p>VAlor: {{busq}}</p>\n<hr> -->\n<!--\n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n            <input type=\"search\"\n            (keyup)=\"onKeyUp($event)\"\n              class=\"form-control\"\n              placeholder=\"Escriba el nombre del paciente o cedula\"\n              [formControl]=\"searchField\"\n            >\n          </div>\n        </form>\n        <div class=\"text-center\">\n        <p class=\"lead\" *ngIf=\"loading\">Loading...</p>\n        </div>\n\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\"\n          *ngFor=\"let i of pacientes | async\">\n          <i class=\"far fa-user-circle\">{{i.nombres}} {{i.apellido1}} {{i.apellido2}}</i>\n          </li>\n        </ul>\n -->\n\n    <!-- <option *ngFor=\"pacs\" [ngValue]=\"pacs._id\">{{pacs.nombres}} {{pacs.apellido1}} {{pacs.apellido2}}</option> -->\n"

/***/ }),

/***/ "./src/app/components/historia/historia-pre.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var paciente_service_1 = __webpack_require__("./src/app/services/paciente.service.ts");
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
var HistoriaPreComponent = /** @class */ (function () {
    function HistoriaPreComponent(router, pacService) {
        this.router = router;
        this.pacService = pacService;
        this.searchTerm = '';
        this.getPatients();
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    HistoriaPreComponent.prototype.ngOnInit = function () {
        // this.user=null
        this.title = 'Buscar Paciente';
    };
    HistoriaPreComponent.prototype.getPatients = function () {
        var _this = this;
        this.pacService.getPacActivos().subscribe(function (res) {
            _this.pacs = res;
        });
    };
    HistoriaPreComponent.prototype.goToHistory = function (pac) {
        console.log(pac);
        this.id = pac;
        this.router.navigate(['historia', pac]); //, {queryParams: {name:name}})
    };
    HistoriaPreComponent.prototype.search = function (evento) {
        var itemsCopy = this.pacs;
        //  this.searchTerm=(<HTMLInputElement>evento.target).value
        /* Perform a case-insensitive search:
        var str = "Mr. Blue has a blue house";
        var n = str.search(/blue/i); */
        var term = this.searchTerm.toUpperCase();
        this.items = itemsCopy.filter(function (tag) {
            if (tag) {
                var nombre = tag.nombres ? tag.nombres.toUpperCase() + ' ' : '';
                nombre += tag.apellido1 ? tag.apellido1.toUpperCase() + ' ' : '';
                nombre += tag.apellido2 ? tag.apellido2.toUpperCase() : '';
                nombre += tag.id ? ' | ' + tag.id : '';
                console.log(nombre);
                return nombre.indexOf(term) >= 0;
            }
        });
        console.log(this.items);
    };
    HistoriaPreComponent.prototype.onMouseOverOut = function () {
        this.isMouseOver = !this.isMouseOver;
    };
    HistoriaPreComponent = __decorate([
        core_1.Component({
            moduleId: module.i.toString(),
            selector: 'app-historia-pre',
            template: __webpack_require__("./src/app/components/historia/historia-pre.component.html"),
            styles: [__webpack_require__("./src/app/components/historia/historia-pre.component.css")],
            providers: [paciente_service_1.PacienteService]
            //styleUrls: ['./maestros.component.css'],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            paciente_service_1.PacienteService])
    ], HistoriaPreComponent);
    return HistoriaPreComponent;
}());
exports.HistoriaPreComponent = HistoriaPreComponent;


/***/ }),

/***/ "./src/app/components/historia/historia.component.html":
/***/ (function(module, exports) {

module.exports = "<!--        <div class=\"generic-table table-responsive\" *ngIf=\"dates\">\n            <b>Atender Citas:</b>\n            <table class=\"generic-table table table-bordered table-border table-hover\">\n                <tr class=\"success\">\n                    <th>Inicio</th>\n                    <th>Fin</th>\n                    <th>Profesional</th>\n                    <th class=\"edit-column\">Atender</th>\n                     <th>Fecha Asignada</th> \n                    <th>Fecha Modificada</th>\n                </tr>\n                <tr *ngFor=\"let date of dates\">\n                    <td>{{date.start| date: 'dd/MM/yyyy hh:mm a' : date.offset}}</td>\n                    <td>{{date.end| date: 'dd/MM/yyyy hh:mm a' : date.offset}}</td>\n                    <td>{{date.nombreU}}</td>\n                    <td><a [routerLink]=\"['nota', 'new']\" [queryParams]=\"{user: date.user,dateId:date._id,nombreU:date.nombreU,nombreC:date.nombreC}\" class=\"btn btn-xs btn-default\">Atender Cita</a></td> \n                    <td>{{date.created_at| date: 'dd/MM/yyyy hh:mm a' : date.offset}}</td> \n                    <td>{{date.updated_at| date: 'dd/MM/yyyy hh:mm a' : date.offset}}</td>\n                </tr>\n            </table>\n        </div>-->\n\n<div><a [routerLink]=\"['nota', 'new']\" [queryParams]=\"{user: id}\" class=\"btn btn-xs btn-default\">Atender Cita</a></div>\n<div class=\"table-responsive\">\n    <h1>Historial de notas:</h1>\n    <table class=\"generic-table table table-bordered table-border table-hover\">\n        <tr class=\"success\">\n            <th>Fecha y hora nota</th>\n            <th>Fecha y hora Modificada</th>\n            <th>Profesional</th>\n            <th class=\"edit-column\">Ver nota</th>\n        </tr>\n        <tr *ngFor=\"let nota of historia\">\n            <td>{{nota.created_at| date: 'dd/MM/yyyy hh:mm a' : nota.offset}}</td>\n            <td>{{nota.updated_at| date: 'dd/MM/yyyy hh:mm a' : nota.offset}}</td>\n            <td>{{nota.nombreU}}</td>\n            <td>\n                <a [routerLink]=\"['nota', nota._id]\" [queryParams]=\"{nombreU:nota.nombreU}\">\n                    <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i> {{nota.motivo}}\n                </a>\n            </td>\n        </tr>\n    </table>\n</div>\n<h3>Cantidad: {{historiacount}}</h3>\n<div class=\"view-side-form\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/components/historia/historia.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var historia_service_1 = __webpack_require__("./src/app/services/historia.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var index_1 = __webpack_require__("./src/app/components/_animations/index.ts");
var pub_sub_service_1 = __webpack_require__("./src/app/services/pub-sub.service.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var HistoriaComponent = /** @class */ (function () {
    function HistoriaComponent(historiaService, router, pubSubService, flashMessage, route) {
        var _this = this;
        this.historiaService = historiaService;
        this.router = router;
        this.pubSubService = pubSubService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.historia = [];
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.title = 'Historia paciente '; //+ tipo.toUpperCase( )
            _this.id = params['id'];
            _this.pubSubService.publish('notas-updated');
        });
    }
    HistoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNotas();
        this.subscription = this.pubSubService.on('notas-updated')
            .subscribe(function () { return _this.getNotas(); });
    };
    /* getDates(id){
         this.dateSub= this.datesService.getPenDates(id).subscribe(res=>{
             this.dates=res
             console.log(this.dates)
         })
         
     }*/
    HistoriaComponent.prototype.getNotas = function () {
        var _this = this;
        this.historiaService.getNotas(this.id).subscribe(function (res) {
            _this.historia = res;
            _this.historiacount = +_this.historia.length;
            console.log(_this.historia);
        });
    };
    HistoriaComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        console.log('se destruyo el servicio');
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    };
    HistoriaComponent = __decorate([
        core_1.Component({
            moduleId: module.i.toString(),
            selector: 'app-historia',
            template: __webpack_require__("./src/app/components/historia/historia.component.html"),
            styles: [__webpack_require__("./src/app/components/_content/app.less")],
            // make fade in animation available to this component
            animations: [index_1.fadeInAnimation],
            providers: [historia_service_1.HistoriaService, pub_sub_service_1.PubSubService],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [historia_service_1.HistoriaService,
            router_1.Router,
            pub_sub_service_1.PubSubService,
            angular2_flash_messages_1.FlashMessagesService,
            router_1.ActivatedRoute])
    ], HistoriaComponent);
    return HistoriaComponent;
}());
exports.HistoriaComponent = HistoriaComponent;


/***/ }),

/***/ "./src/app/components/historia/historia.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var historia_component_1 = __webpack_require__("./src/app/components/historia/historia.component.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var nota_component_1 = __webpack_require__("./src/app/components/historia/nota.component.ts");
var historia_pre_component_1 = __webpack_require__("./src/app/components/historia/historia-pre.component.ts");
var paciente_view_component_1 = __webpack_require__("./src/app/components/historia/paciente-view.component.ts");
var auth_guard_1 = __webpack_require__("./src/app/guards/auth.guard.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var routes = [
    { path: '', component: historia_pre_component_1.HistoriaPreComponent, canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: ':id', component: historia_component_1.HistoriaComponent, canActivate: [auth_guard_1.AuthGuard],
                children: [
                    { path: 'nota/:id', component: nota_component_1.NotaComponent, canActivate: [auth_guard_1.AuthGuard]
                    }
                ]
            }
        ]
    }
];
var HistoriaModule = /** @class */ (function () {
    function HistoriaModule() {
    }
    HistoriaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(routes),
                angular2_flash_messages_1.FlashMessagesModule,
            ],
            declarations: [historia_component_1.HistoriaComponent, nota_component_1.NotaComponent, historia_pre_component_1.HistoriaPreComponent, paciente_view_component_1.PacienteViewComponent],
            exports: [router_1.RouterModule]
        })
    ], HistoriaModule);
    return HistoriaModule;
}());
exports.HistoriaModule = HistoriaModule;


/***/ }),

/***/ "./src/app/components/historia/nota.component.css":
/***/ (function(module, exports) {

module.exports = "/*\nbody {\n  padding-top: 70px;\n  padding-bottom: 30px;\n}\n*/\n/*border-right-style: {overflow-y:scroll}\n\n#scroll div{\n  heigth: 100%; margin-bottom: 1px\n}\n\n\n\n.theme-dropdown .dropdown-menu {\n  position: static;\n  display: block;\n  margin-bottom: 20px;\n}\n\n.theme-showcase > p > .btn {\n  margin: 5px 0;\n}\n\n.theme-showcase .navbar .container {\n  width: auto;\n}\n\n#contenedor div{ float:left; }*/"

/***/ }),

/***/ "./src/app/components/historia/nota.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side-form container\" id=\"contenedor\">\n    <flash-messages></flash-messages> \n    <ng-template #loading>\n        <div class=\"text-center\">\n            <i class=\"fa fa-spin fa-spinner fa-5x\"></i>\n            <br>---Cargando las citas---\n        </div>\n    </ng-template>\n    <div class=\"container\"> \n       <h1>{{title}}<span *ngIf=\"nota.created_at\" style=\"font-size: 18px\"> Creación: {{nota.created_at| date: 'dd/MM/yyyy hh:mm a' : nota.offset}} // Modificación: {{nota.updated_at| date: 'dd/MM/yyyy hh:mm a' : nota.offset}}</span><span *ngIf=\"!nota.created_at\" style=\"font-size: 20px;background-color: thistle\">Hora sistema: {{fecha| date: 'dd/MM/yyyy hh:mm a' : nota.offset}}</span><button (click)=\"addNota()\" *ngIf=\"notaId!=='new'\" class=\"btn btn-primary\">Registrar Evolución</button></h1>\n    </div>\n    <div class=\"form-group\"> \n        <form (ngSubmit)=\"addNota()\">\n            <div class=\"form-group main_content\">\n                <label for=\"tipo\" class=\"control-label\">Tipo</label>\n                <select name=\"tipo\" [(ngModel)]=\"nota.tipo\">\n                    <option *ngFor=\"let i of tipos\" [ngValue]=\"i.cod\">{{i.des}}</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"motivo\" class=\"control-label\">Motivo</label>\n                <textarea  wrap=\"off\" rows=\"3\" cols=\"70\" name=\"motivo\" [(ngModel)]=\"nota.motivo\" class=\"form-control\" placeholder=\"Redacte el motivo de la consulta\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"enfact\" class=\"control-label\">Enfermedad actual</label>\n                <textarea  wrap=\"off\" rows=\"3\" cols=\"70\" name=\"enfact\" [(ngModel)]=\"nota.enfact\" class=\"form-control\" placeholder=\"Enfermedad Actual\"></textarea>\n            </div>\n            <div class=\"form-group  main_content\" *ngIf= \"toggleAnt\">\n                <h2>Antecedentes</h2>\n                <div class=\"form-group\">\n                    <label for=\"personales\" class=\"control-label\">Antecedentes personales</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"personales\" [(ngModel)]=\"ant.antper\" class=\"form-control\" placeholder=\"Antecedentes personales\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"patologicos\" class=\"control-label\">Antecedentes patológicos</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"patologicos\" [(ngModel)]=\"ant.antpat\" class=\"form-control\" placeholder=\"Antecedentes patológicos\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"farmacologicos\" class=\"control-label\">Antecedentes farmacológicos</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"farmacologicos\" [(ngModel)]=\"ant.antfar\" class=\"form-control\" placeholder=\"Antecedentes farmacológicos\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"psicologicos\" class=\"control-label\">Antecedentes psicológicos</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"psicologicos\" [(ngModel)]=\"ant.psico\" class=\"form-control\" placeholder=\"Antecedentes psicológicos y/o psiquiatricos\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"religiones\" class=\"control-label\">Antecedentes religiosos</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"religiones\" [(ngModel)]=\"ant.antrel\" class=\"form-control\" placeholder=\"Antecedentes religiosos\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"familiares\" class=\"control-label\">Antecedentes familiares</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"familiares\" [(ngModel)]=\"ant.antfam\" class=\"form-control\" placeholder=\"Antecedentes familiares\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                        <h4>Parientes</h4>\n                    <div class=\"table-responsive\" >\n                        <table class=\"table nota\">\n                            <tr> \n                                <td>\n                                    <label for=\"nombre\" class=\"control-label\">Nombre</label>\n                                    <input type=\"text\" name=\"nombre\" [(ngModel)]=\"pariente.nombre\" class=\"form-control\" placeholder=\"Nombre Pariente\">\n                                </td>\n                                <td><label for=\"parentezco\" class=\"control-label\">Parentezco</label>\n                                    <input type=\"text\" name=\"parentezco\" [(ngModel)]=\"pariente.parentezco\" class=\"form-control\" placeholder=\"Parentezco\">\n                                </td>\n                                <td> <label for=\"edad\" class=\"control-label\">Edad</label>\n                                    <input type=\"number\"  min=\"1\" max=\"100\" onkeydown=\"return false\" default=\"30\" name=\"edad\" [(ngModel)]=\"pariente.edad\" class=\"form-control\" placeholder=\"Edad\">\n                                </td>\n                                <td> <label for=\"ocupacion\" class=\"control-label\">Ocupación</label>\n                                    <input type=\"text\" name=\"ocupacion\" [(ngModel)]=\"pariente.ocupacion\" class=\"form-control\" placeholder=\"Ocupación\">\n                                </td>\n                                <td> <label for=\"satisfaccionPar\" class=\"control-label\">Satisfacción</label>\n                                    <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"satisfaccionPar\" [(ngModel)]=\"pariente.satisfaccion\" class=\"form-control\" placeholder=\"Satisfacción\">\n                                </td>\n                            </tr>\n                            <button (click)=\"addPariente()\" class=\"btn btn-default btn-xs\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> \n                            <tr style=\"font-weight: bold\" *ngIf=\"parientes.length>1000\"> \n                                <td>Nombre</td>            \n                                <td>Parentezco </td>            \n                                <td>Edad</td>            \n                                <td>Ocupación</td>            \n                                <td>Satisfacción</td>            \n                            </tr>\n                            <tr *ngFor=\"let item of parientes;let i = index\">\n                                <td>\n                                    <button (click)=\"delPariente(i)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>                         \n                                    {{item.nombre}}\n                                </td>\n                                <td> \n                                    {{item.parentezco}}\n                                </td>\n                                <td> \n                                    {{item.edad}} años\n                                </td>\n                                <td> \n                                    {{item.ocupacion}}\n                                </td>\n                                <td> \n                                    {{item.satisfaccion}}\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group main_content  form-inline\" style=\"background-color: darkslategrey\">\n                <h3 style=\"font-weight: bold; color:white;\">Matrimonio</h3>\n                <div class=\"form-group\">\n                    <label for=\"nombrePar\" class=\"control-label\">Nombre pareja</label>\n                    <input type=\"text\" name=\"nombrePar\" [(ngModel)]=\"mat.nombre\" class=\"form-control\" placeholder=\"Nombre de la pareja\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"ocupacionPar\" class=\"control-label\">Ocupación</label>\n                    <input type=\"text\" name=\"ocupacionPar\" [(ngModel)]=\"mat.ocupacion\" class=\"form-control\" placeholder=\"Ocupación pareja\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"edadPar\" class=\"control-label\">Edad</label>\n                    <input type=\"number\"  min=\"1\" max=\"100\" default=\"30\" onkeydown=\"return false\" name=\"edadPar\" [(ngModel)]=\"mat.edad\" class=\"form-control\" placeholder=\"Edad pareja\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"entidad\" class=\"control-label\">Entidad</label>\n                    <input type=\"text\" name=\"entidad\" [(ngModel)]=\"mat.entidad\" class=\"form-control\" placeholder=\"Entidad Pareja\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"escolaridad\" class=\"control-label\">Escolaridad</label>\n                    <input type=\"text\" name=\"escolaridad\" [(ngModel)]=\"mat.escolaridad\" class=\"form-control\" placeholder=\"Escolaridad\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"relacion\" class=\"control-label\">Tiempo Relación</label>\n                    <input type=\"text\" name=\"relacion\" [(ngModel)]=\"mat.relacion\" class=\"form-control\" placeholder=\"Relación\">\n                </div>\n                <div  class=\"form-group\">\n                    <label for=\"convivencia\" class=\"control-label\">Tiempo Convivencia</label>\n                    <input type=\"text\" name=\"convivencia\" [(ngModel)]=\"mat.convivencia\" class=\"form-control\" placeholder=\"Convivencia\"/>\n                </div>\n                <div class=\"nota form-group\"> <h4 style=\"font-weight: bold\">Satisfacción Matrimonio</h4>\n                    <div  class=\"form-group\">\n                        <label for=\"comunicacion\" class=\"control-label\">Comunicación con el cónyuge</label>\n                        <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"comunicacion\" [(ngModel)]=\"mat.comunicacion\" class=\"form-control\" placeholder=\"Comunicación\"/>\n                    </div>\n                    <div  class=\"form-group\">\n                        <label for=\"responsabilidades\" class=\"control-label\">Responsabilidades del hogar asumidas por el cónyuge</label>\n                        <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"responsabilidades\" [(ngModel)]=\"mat.responsabilidades\" class=\"form-control\" placeholder=\"Responsabilidades\"/>\n                    </div>\n                    <div  class=\"form-group\">\n                        <label for=\"manifestaciones\" class=\"control-label\">Manifestaciones afectivas del cónyuge</label>\n                        <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"manifestaciones\" [(ngModel)]=\"mat.manifestaciones\" class=\"form-control\" placeholder=\"Manifestaciones\"/>\n                    </div>\n                    <div  class=\"form-group\">\n                        <label for=\"relaciones\" class=\"control-label\">Relaciones sexuales</label>\n                        <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"relaciones\" [(ngModel)]=\"mat.relaciones\" class=\"form-control\" placeholder=\"Relaciones\"/>\n                    </div>\n                    <div  class=\"form-group\">\n                        <label for=\"actividades\" class=\"control-label\">Actividades sociales compartidas</label>\n                        <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"actividades\" [(ngModel)]=\"mat.actividades\" class=\"form-control\" placeholder=\"Actividades\"/>\n                    </div>\n                    <div  class=\"form-group\">\n                        <label for=\"recreacion\" class=\"control-label\">Recreación y tiempo libre</label>\n                        <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"recreacion\" [(ngModel)]=\"mat.recreacion\" class=\"form-control\" placeholder=\"Recreación\"/>\n                    </div>\n                    <div  class=\"form-group\">\n                        <label for=\"finanzas\" class=\"control-label\">Manejo de finanzas</label>\n                        <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"finanzas\" [(ngModel)]=\"mat.finanzas\" class=\"form-control\" placeholder=\"finanzas\"/>\n                    </div>\n                    <div  class=\"form-group\">\n                        <label for=\"hijos\" class=\"control-label\">Métodos de crianza de los hijos</label>\n                        <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"hijos\" [(ngModel)]=\"mat.hijos\" class=\"form-control\" placeholder=\"Hijos\"/>\n                    </div>\n                    <div  class=\"form-group\">\n                        <label for=\"relfam\" class=\"control-label\">Relaciones con la familia del cónyuge</label>\n                        <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"relfam\" [(ngModel)]=\"mat.familiares\" class=\"form-control\" placeholder=\"Familiares\"/>\n                    </div>\n                    <div  class=\"form-group\">\n                        <label for=\"satisfaccionMat\" class=\"control-label\">Satisfacción general</label>\n                        <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"satisfaccionMat\" [(ngModel)]=\"mat.satisfaccion\" class=\"form-control\" placeholder=\"Satisfacción\"/>\n                    </div>\n                </div>                 \n            </div>\n            <div class=\"form-group main_content contenedor\">\n                <div class=\"form-group\">           \n                    <h3 style=\"font-weight: bold\">Ambiente social</h3>\n                    <H4 style=\"font-weight: bold\">Con quien convive actualmente el/la paciente</H4>\n                    <div class=\"table-responsive\" >\n                        <table class=\"table nota\">\n                            <tr> \n                                <td>\n                                    <label for=\"nombre2\" class=\"control-label\">Nombre</label>\n                                    <input type=\"text\" name=\"nombre2\" [(ngModel)]=\"convive.nombre\" class=\"form-control\" placeholder=\"Nombre Pariente\">\n                                </td>\n                                <td> <label for=\"edad2\" class=\"control-label\">Edad</label>\n                                    <input type=\"number\"  min=\"1\" max=\"100\" onkeydown=\"return false\" default=\"30\" name=\"edad2\" [(ngModel)]=\"convive.edad\" class=\"form-control\" placeholder=\"Edad\">\n                                </td>\n                                <td><label for=\"relacion\" class=\"control-label\">Relación (pariente,amigo, etc.)</label>\n                                    <input type=\"text\" name=\"relacion\" [(ngModel)]=\"convive.relacion\" class=\"form-control\" placeholder=\"Relación\">\n                                </td>\n                            </tr>\n                            <button (click)=\"addConviven()\" class=\"btn btn-default btn-xs\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> \n                            <tr style=\"font-weight: bold\" *ngIf=\"conviven.length>1000\"> \n                                <td >Nombre </td>            \n                                <td >Edad </td>            \n                                <td >Relación </td>            \n                            </tr>\n                            <tr *ngFor=\"let item of conviven;let i = index\">\n                                <td>\n                                    <button (click)=\"delConviven(i)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>                         \n                                    {{item.nombre}}\n                                </td>\n                                <td> \n                                    {{item.edad}} años\n                                </td>\n                                <td> \n                                    {{item.relacion}}\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            <div >           \n                <H4 style=\"font-weight: bold\">¿Qué personas son importantes para el/la paciente? </H4>\n                <p>Personas con las que actualmente tiene alguna relación continua o permanente, </p>\n                <p>sin repetir alguno de los nombres que se escribieron en el punto anterior</p>\n                <div class=\"table-responsive\" >\n                    <table class=\"table nota\">\n                        <tr> \n                            <td>\n                                <label for=\"nombre3\" class=\"control-label\">Nombre</label>\n                                <input type=\"text\" name=\"nombre3\" [(ngModel)]=\"importante.nombre\" class=\"form-control\" placeholder=\"Nombre persona importante\">\n                            </td>\n                            <td> <label for=\"edad3\" class=\"control-label\">Edad</label>\n                                <input type=\"number\"  min=\"1\" max=\"100\" onkeydown=\"return false\" default=\"30\" name=\"edad3\" [(ngModel)]=\"importante.edad\" class=\"form-control\" placeholder=\"Edad\">\n                            </td>\n                            <td><label for=\"relacion2\" class=\"control-label\">Relación (pariente,amigo, etc.)</label>\n                                <input type=\"text\" name=\"relacion2\" [(ngModel)]=\"importante.relacion\" class=\"form-control\" placeholder=\"Relación\">\n                            </td>\n                        </tr>\n                        <button (click)=\"addImportante()\" class=\"btn btn-default btn-xs\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> \n                        <tr style=\"font-weight: bold\" *ngIf=\"importantes.length>1000\"> \n                            <td>Nombre </td>            \n                            <td>Edad </td>            \n                            <td>Relación </td>            \n                        </tr>\n                        <tr *ngFor=\"let item of importantes;let i = index\">\n                            <td>\n                                <button (click)=\"delImportante(i)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>                         \n                                {{item.nombre}}\n                            </td>\n                            <td> \n                                {{item.edad}} años\n                            </td>\n                            <td> \n                                {{item.relacion}}\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"frecuencia\" class=\"control-label\">¿Con que frecuencia participa en actividades sociales? <h6> (reuniones con amigos, fiestas, paseos, etc.)</h6></label>\n                <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"frecuencia\" [(ngModel)]=\"soc.frecuencia\" class=\"form-control\" placeholder=\"Frecuencia\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"satisfaccion\" class=\"control-label\">Nivel de satisfacción<h6>General</h6></label>\n                <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"satisfaccion\" [(ngModel)]=\"soc.satisfaccion\" class=\"form-control\" placeholder=\"Satisfacción\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"observaciones\" class=\"control-label\">Observaciones</label>\n                <textarea wrap=\"off\" rows=\"2\" cols=\"80\" style=\"width:auto;\" name=\"observaciones\" [(ngModel)]=\"soc.observaciones\" class=\"form-control\" placeholder=\"Observaciones\"></textarea>\n            </div>\n            </div>\n            <div class=\"form-group nota\">\n                 <div class=\"form-group\">           \n                    <h3>INFORMACIÓN ACADÉMICA</h3>\n                    <div class=\"table-responsive\" style=\"width:auto\">\n                            <h4 >Orden cronológico de los colegios en los cuales ha estudiado el/la paciente</h4>\n                        <table class=\"table main_content\">\n                            <tr> \n                                <td>\n                                    <label for=\"edad4\" class=\"control-label\">Edad</label>\n                                    <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"100\" onkeydown=\"return false\" name=\"edad4\" [(ngModel)]=\"colegio.edad\" class=\"form-control\" placeholder=\"Edad estudio\">\n                                </td>\n                                <td> <label for=\"fecha\" class=\"control-label\">Fecha</label>\n                                    <input type=\"date\" style=\"width:auto;\" name=\"fecha\" [(ngModel)]=\"colegio.fecha\" class=\"form-control\" placeholder=\"Fecha\">\n                                </td>\n                                <td><label for=\"colegio\" class=\"control-label\">Nombre Colegio</label>\n                                    <input type=\"text\" style=\"width:auto;\" name=\"colegio\" [(ngModel)]=\"colegio.colegio\" class=\"form-control\" placeholder=\"Colegio\">\n                                </td>\n                                <td><label for=\"cursos\" class=\"control-label\">Cursos</label>\n                                    <input type=\"text\" style=\"width:auto;\"  name=\"cursos\" [(ngModel)]=\"colegio.cursos\" class=\"form-control\" placeholder=\"Cursos\">\n                                </td>\n                            </tr>\n                            <button (click)=\"addColegio()\" class=\"btn btn-default btn-xs\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> \n                            <tr style=\"font-weight: bold\" *ngIf=\"colegios.length>1000\"> \n                                <td>Edad</td>            \n                                <td>Fecha</td>            \n                                <td>Colegio</td>            \n                                <td>Cursos</td>                                            \n                            </tr>\n                            <tr *ngFor=\"let item of colegios;let i = index\">\n                                <td>\n                                    <button (click)=\"delColegio(i)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>                         \n                                    {{item.edad}} años\n                                </td>\n                                <td> \n                                    {{item.fecha| date: 'dd/MM/yyyy'}}\n                                </td>\n                                <td> \n                                    {{item.colegio}}\n                                </td>\n                                <td> \n                                    {{item.cursos}}\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <div >           \n                    <h4>Descripción de los estudios universitarios</h4>\n                    <div class=\"table-responsive\" >\n                        <table class=\"table main_content\">\n                            <tr> \n                                <td>\n                                    <label for=\"edad5\" class=\"control-label\">Edad</label>\n                                    <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"100\" onkeydown=\"return false\" name=\"edad5\" [(ngModel)]=\"universidad.edad\" class=\"form-control\" placeholder=\"Edad estudio\">\n                                </td>\n                                <td> <label for=\"fecha2\" class=\"control-label\">Fecha</label>\n                                    <input type=\"date\" style=\"width:auto;\" name=\"fecha2\" [(ngModel)]=\"universidad.fecha\" class=\"form-control\" placeholder=\"Fecha\">\n                                </td>\n                                <td><label for=\"institucion\" class=\"control-label\">Nombre Institución</label>\n                                    <input type=\"text\"style=\"width:auto;\" name=\"institucion\" [(ngModel)]=\"universidad.institucion\" class=\"form-control\" placeholder=\"Institución\">\n                                </td>\n                                <td><label for=\"carrera\" class=\"control-label\">Carrera</label>\n                                    <input type=\"text\" style=\"width:auto;\"  name=\"carrera\" [(ngModel)]=\"universidad.carrera\" class=\"form-control\" placeholder=\"Carrera\">\n                                </td>\n                            </tr>\n                            <button (click)=\"addUniversidad()\" class=\"btn btn-default btn-xs\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> \n                            <tr style=\"font-weight: bold\" *ngIf=\"universidades.length>1000\"> \n                                <td>Edad</td>            \n                                <td>Fecha</td>            \n                                <td>Institución</td>  \n                                <td>Carrera</td>                                                  \n                            </tr>\n                            <tr *ngFor=\"let item of universidades;let i = index\">\n                                <td>\n                                    <button (click)=\"delUniversidad(i)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>                         \n                                    {{item.edad}} años\n                                </td>\n                                <td> \n                                    {{item.fecha| date: 'dd/MM/yyyy'}}\n                                </td>\n                                <td> \n                                    {{item.institucion}}\n                                </td>\n                                <td> \n                                    {{item.carrera}}\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <h4>DESEMPEÑO ACADÉMICO</h4>\n                    <div class=\"form-group\">\n                        <label for=\"general\" class=\"control-label\">Nivel de Satisfacción<h6>General</h6></label>\n                        <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"general\" [(ngModel)]=\"desempeno.general\" class=\"form-control\" placeholder=\"Desempeño general\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"actual\" class=\"control-label\">Satisfacción Actual <h6>Si actualmente estudia</h6></label>\n                        <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"actual\" [(ngModel)]=\"desempeno.actual\" class=\"form-control\" placeholder=\"Satisfacción actual\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"observacionesDes\" class=\"control-label\">Observaciones desempeño académico</label>\n                        <textarea wrap=\"off\" rows=\"2\" cols=\"40\" style=\"width:auto;\" name=\"observacionesDes\" [(ngModel)]=\"desempeno.observaciones\" class=\"form-control\" placeholder=\"Observaciones desempeño académico\"></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group main_content\">\n                <div class=\"form-group\">           \n                    <h3>INFORMACIÓN LABORAL</h3>\n                    <div class=\"form-group\">\n                        <label for=\"laboral\" class=\"control-label\">Trabajo actual. <h6>Entidad, cargo y funciones que desempeña el/la paciente</h6></label>\n                        <textarea wrap=\"off\" rows=\"4\" cols=\"35\" style=\"width:auto;\" name=\"laboral\" [(ngModel)]=\"trabajo.laboral\" class=\"form-control\" placeholder=\"Trabajo actual, entidad, cargo y funciones que desempeña el/la paciente\"></textarea>\n                    </div>\n                    <div class=\"table-responsive\" >\n                        <p>Orden cronológico de los trabajos en los que el/la paciente ha trabajado</p>\n                        <table class=\"table nota\">\n                            <tr> \n                                <td><label for=\"entidad1\" class=\"control-label\">Entidad</label>\n                                    <input type=\"text\" name=\"colegio\" [(ngModel)]=\"trabajo1.entidad\" class=\"form-control\" placeholder=\"Entidad\">\n                                </td>\n                                <td> <label for=\"cargo\" class=\"control-label\">Cargo</label>\n                                    <input type=\"text\" name=\"cargo\" [(ngModel)]=\"trabajo1.cargo\" class=\"form-control\" placeholder=\"Cargo\">\n                                </td>\n                                <td><label for=\"fechat\" class=\"control-label\">Fecha</label>\n                                    <input type=\"date\"  name=\"fechat\" [(ngModel)]=\"trabajo1.fecha\" class=\"form-control\" placeholder=\"Fecha\">\n                                </td>\n                                <td><label for=\"retiro\" class=\"control-label\">Motivo de retiro</label>\n                                    <input type=\"text\" name=\"retiro\" [(ngModel)]=\"trabajo1.retiro\" class=\"form-control\" placeholder=\"Retiro\">\n                                </td>\n                            </tr>\n                        <button (click)=\"addTrabajo()\" class=\"btn btn-default btn-xs\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> \n                        <tr style=\"font-weight: bold\" *ngIf=\"trabajos.length>1000\"> \n                            <td>Entidad</td>            \n                            <td>Cargo</td>            \n                            <td>Fecha</td>            \n                            <td>Motivo de retiro</td>                                            \n                        </tr>\n                        <tr *ngFor=\"let item of trabajos;let i = index\">\n                            <td>\n                                <button (click)=\"delTrabajo(i)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>                         \n                                {{item.entidad}}\n                            </td>\n                            <td> \n                                {{item.cargo}}\n                            </td>\n                            <td> \n                                {{item.fecha| date: 'dd/MM/yyyy'}}\n                            </td>\n                            <td> \n                                {{item.retiro}}\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n                <div class=\"form-group\">\n                    <h4>NIVEL DE SATISFACCIÓN EN EL TRABAJO ACTUAL</h4>\n                    <div class=\"form-group\">\n                        <label for=\"personal\" class=\"control-label\">Desarrollo personal</label>\n                        <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"personal\" [(ngModel)]=\"trabajo.desarrollo\" class=\"form-control\" placeholder=\"Desarrollo personal\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"remuneracion\" class=\"control-label\">Remuneración</label>\n                        <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"remuneracion\" [(ngModel)]=\"trabajo.remuneracion\" class=\"form-control\" placeholder=\"Remuneración\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"relaciones1\" class=\"control-label\">Relaciones laborales</label>\n                        <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"relaciones1\" [(ngModel)]=\"trabajo.relaciones\" class=\"form-control\" placeholder=\"Relaciones laborales\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"estres\" class=\"control-label\">Estrés generado por trabajo</label>\n                        <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"estres\" [(ngModel)]=\"trabajo.estres\" class=\"form-control\" placeholder=\"Estrés generado por trabajo\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"observacionesTra\" class=\"control-label\">Observaciones trabajo actual</label>\n                        <textarea wrap=\"off\" rows=\"1\" cols=\"40\" style=\"width:auto;\" name=\"observacionesTra\" [(ngModel)]=\"trabajo.observaciones\" class=\"form-control\" placeholder=\"Observaciones trabajo actual\"></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group nota\">\n                <h3>AFICIONES, INTERESES Y RECREACIÓN<h6>FRECUENCIA: Calificación de 1 a 5 de la frecuencia con la que el/la paciente realiza cada actividad (5=diariamente; 4=dos veces por semana; 3=semanalmente; 2=dos veces al mes; 1=mensualmente o menos)<br>SATISFACCIÓN: Calificación de 1 a 5 del grado de satisfacción que le produce cada actividad.</h6></h3>\n                <div class=\"form-group bloque\">\n                    <div class=\"table-responsive\" >\n                        <br> <br>           \n                        <table class=\"table main_content\">\n                            <tr> \n                                <td>\n                                    <label for=\"tipact\" class=\"control-label\">Tipo actividad</label>\n                                    <input type=\"text\" style=\"width:auto;\" name=\"tipact\" [(ngModel)]=\"aficion.tipo\" class=\"form-control\" placeholder=\"Tipo\">\n                                </td>\n                                <td> \n                                    <label for=\"freact\" class=\"control-label\">Frecuencia</label>\n                                    <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"5\" onkeydown=\"return false\" name=\"freact\" [(ngModel)]=\"aficion.frecuencia\" class=\"form-control\" placeholder=\"Frecuencia\">\n                                </td>\n                                <td>\n                                    <label for=\"satact\" class=\"control-label\">Satisfacción</label>\n                                    <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"5\" onkeydown=\"return false\" name=\"satact\" [(ngModel)]=\"aficion.satisfaccion\" class=\"form-control\" placeholder=\"Satisfacción\">\n                                </td>\n                            </tr>\n                            <button (click)=\"addAficion()\" class=\"btn btn-default btn-xs\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> \n                            <tr style=\"font-weight: bold\" *ngIf=\"aficiones.length>1000\"> \n                                <td>tipo</td>            \n                                <td>Frecuencia</td>            \n                                <td>Satisfacción</td>            \n                            </tr>\n                            <tr *ngFor=\"let item of aficiones;let i = index\">\n                                <td>\n                                    <button (click)=\"delAficion(i)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>                         \n                                    {{item.tipo}}\n                                </td>\n                                <td> \n                                    {{item.frecuencia}}\n                                </td>\n                                <td> \n                                    {{item.satisfaccion}}\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <h4 style=\"width: auto\">Tipo de aficiones o intereses que el/la paciente<br>tenía en el pasado y que actualmente ya no tiene </h4>\n                    <div class=\"table-responsive\" >\n                        <table class=\"table main_content\">\n                            <tr> \n                                <td>\n                                    <label for=\"tipactant\" class=\"control-label\">Tipo actividad</label>\n                                    <input type=\"text\" style=\"width:auto;\" name=\"tipactant\" [(ngModel)]=\"anterior.tipo\" class=\"form-control\" placeholder=\"Tipo\">\n                                </td>\n                                <td> \n                                    <label for=\"freactant\" class=\"control-label\">Frecuencia</label>\n                                    <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"5\" onkeydown=\"return false\" name=\"freactant\" [(ngModel)]=\"anterior.frecuencia\" class=\"form-control\" placeholder=\"Frecuencia\">\n                                </td>\n                                <td>\n                                    <label for=\"satactant\" class=\"control-label\">Satisfacción</label>\n                                    <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"5\" onkeydown=\"return false\" name=\"satactant\" [(ngModel)]=\"anterior.satisfaccion\" class=\"form-control\" placeholder=\"Satisfacción\">\n                                </td>\n                            </tr>\n                            <button (click)=\"addAnterior()\" class=\"btn btn-default btn-xs\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> \n                            <tr style=\"font-weight: bold\" *ngIf=\"anteriores.length>1000\"> \n                                <td>tipo</td>            \n                                <td>Frecuencia</td>            \n                                <td>Satisfacción</td>            \n                            </tr>\n                            <tr *ngFor=\"let item of anteriores;let i = index\">\n                                <td>\n                                    <button (click)=\"delAnterior(i)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>                         \n                                    {{item.tipo}}\n                                </td>\n                                <td> \n                                    {{item.frecuencia}}\n                                </td>\n                                <td> \n                                    {{item.satisfaccion}}\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <h4>¿Qué tipo de aficiones o actividades de recreación<br>que no está realizando el/la paciente en la actualidad,<br> le gustaría desarrollar en el futuro?</h4>\n                    <div class=\"table-responsive\" >\n                        <table class=\"table main_content\">\n                            <tr> \n                                <td>\n                                    <label for=\"tipactfut\" class=\"control-label\">Tipo actividad</label>\n                                    <input type=\"text\" style=\"width:auto;\" name=\"tipactfut\" [(ngModel)]=\"futuro.tipo\" class=\"form-control\" placeholder=\"Tipo\">\n                                </td>\n                                <td> \n                                    <label for=\"freactfut\" class=\"control-label\">Frecuencia</label>\n                                    <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"5\" onkeydown=\"return false\" name=\"freactfut\" [(ngModel)]=\"futuro.frecuencia\" class=\"form-control\" placeholder=\"Frecuencia\">\n                                </td>\n                                <td>\n                                    <label for=\"satactfut\" class=\"control-label\">Satisfacción</label>\n                                    <input type=\"number\" style=\"width:auto;\" min=\"1\" max=\"5\" onkeydown=\"return false\" name=\"satactfut\" [(ngModel)]=\"futuro.satisfaccion\" class=\"form-control\" placeholder=\"Satisfacción\">\n                                </td>\n                            </tr>\n                            <button (click)=\"addFuturo()\" class=\"btn btn-default btn-xs\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> \n                            <tr style=\"font-weight: bold\" *ngIf=\"futuros.length>1000\"> \n                                <td>tipo</td>            \n                                <td>Frecuencia</td>            \n                                <td>Satisfacción</td>            \n                            </tr>\n                            <tr *ngFor=\"let item of futuros;let i = index\">\n                                <td>\n                                    <button (click)=\"delFuturo(i)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>                         \n                                    {{item.tipo}}\n                                </td>\n                                <td> \n                                    {{item.frecuencia}}\n                                </td>\n                                <td> \n                                    {{item.satisfaccion}}\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"satisfaccionafi\" class=\"control-label\">Nivel de satisfacción actual en aficiones, intereses y recreación:</label>\n                    <input style=\"width:auto;\" type=\"number\"  min=\"1\" max=\"10\" onkeydown=\"return false\" name=\"satisfaccionafi\" [(ngModel)]=\"nota.satisfaccionaficiones\" class=\"form-control\" placeholder=\"aficiones\"/>\n                </div>\n            </div>\n            <div class=\"form-group  main_content\" *ngIf= \"toggleAnt\">\n                <h2>OTRAS ÁREAS DE AJUSTE</h2>\n                <div class=\"form-group\">\n                    <label for=\"respetar\" class=\"control-label\">Dificultades para hacerse respetar y para hacer valer sus derechos, o para expresar desacuerdo o resentimiento cuando es apropiado, o para impedir que otras personas se aprovechen</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"respetar\" [(ngModel)]=\"area.respetar\" class=\"form-control\" placeholder=\"Respeto\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"tristeza\" class=\"control-label\">Periodos de profunda tristeza o depresión en los que no siente ánimo para desempeñar ninguna actividad</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"tristeza\" [(ngModel)]=\"area.tristeza\" class=\"form-control\" placeholder=\"Tristeza\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"sexual\" class=\"control-label\">Dificultades de tipo sexual</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"sexual\" [(ngModel)]=\"area.sexual\" class=\"form-control\" placeholder=\"Tipo sexual\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"amistades\" class=\"control-label\">Dificultad para establecer o mantener relaciones satisfactorias de amistad con otras personas</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"amistades\" [(ngModel)]=\"area.amistades\" class=\"form-control\" placeholder=\"Amistades\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"relaciones2\" class=\"control-label\">Dificultada para establecer relaciones afectivas con otras personas</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"relaciones2\" [(ngModel)]=\"area.relaciones\" class=\"form-control\" placeholder=\"Relaciones\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"temor\" class=\"control-label\">Temor muy intenso ante alguna situación u objeto que interfiera con la actividad normal</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"temor\" [(ngModel)]=\"area.temor\" class=\"form-control\" placeholder=\"Temor\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"alcohol\" class=\"control-label\">Problemas para controlar el consumo de bebidas alcohólicas</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"alcohol\" [(ngModel)]=\"area.alcohol\" class=\"form-control\" placeholder=\"Alcohol\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"tto\" class=\"control-label\">Programa de tratamiento por consumo de bebidas alcohólicas</label>\n                    <textarea  wrap=\"off\" rows=\"3\" cols=\"25\" name=\"tto\" [(ngModel)]=\"area.tratamiento\" class=\"form-control\" placeholder=\"Tratamiento alcohol\"></textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"impresion\" class=\"control-label\">IMPRESIÓN DIAGNÓSTICA</label>\n                <textarea  wrap=\"off\" rows=\"3\" cols=\"70\" name=\"impresion\" [(ngModel)]=\"nota.impresion\" class=\"form-control\" placeholder=\"Impresión Diagnóstica\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"conducta\" class=\"control-label\">CONDUCTA O PLAN DE TRATAMIENTO</label>\n                <textarea  wrap=\"off\" rows=\"3\" cols=\"70\" name=\"conducta\" [(ngModel)]=\"nota.conducta\" class=\"form-control\" placeholder=\"Plan de tratamiento\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"pronostico\" class=\"control-label\">PRONÓSTICO</label>\n                <textarea  wrap=\"off\" rows=\"3\" cols=\"70\" name=\"pronostico\" [(ngModel)]=\"nota.pronostico\" class=\"form-control\" placeholder=\"Pronóstico\"></textarea>\n            </div>\n            <div class=\"form-group\">                \n                <flash-messages></flash-messages>\n                <a class=\"btn btn-warning\" [routerLink]=\"['/historia', pacienteId]\">Cancelar</a>\n                <button class=\"btn btn-primary\">Guardar</button> \n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/historia/nota.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var validate_service_1 = __webpack_require__("./src/app/services/validate.service.ts");
var historia_service_1 = __webpack_require__("./src/app/services/historia.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var index_1 = __webpack_require__("./src/app/components/_animations/index.ts");
var pub_sub_service_1 = __webpack_require__("./src/app/services/pub-sub.service.ts");
var maestros_service_1 = __webpack_require__("./src/app/services/maestros.service.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var NotaComponent = /** @class */ (function () {
    function NotaComponent(validateService, historiaService, router, route, pubSubService, flashMessage, maestrosService) {
        var _this = this;
        this.validateService = validateService;
        this.historiaService = historiaService;
        this.router = router;
        this.route = route;
        this.pubSubService = pubSubService;
        this.flashMessage = flashMessage;
        this.maestrosService = maestrosService;
        this.nota = {};
        this.title = 'Agregar Nota';
        this.fecha = new Date();
        this.toggleAnt = true;
        this.tipos = [];
        this.ant = {};
        this.mat = {};
        this.soc = {};
        this.desempeno = {};
        this.area = {};
        this.pariente = {};
        this.parientes = [];
        this.convive = {};
        this.conviven = [];
        this.importante = {};
        this.importantes = [];
        this.colegio = {};
        this.colegios = [];
        this.universidad = {};
        this.universidades = [];
        this.trabajo = {};
        this.trabajo1 = {};
        this.trabajos = [];
        this.aficion = {};
        this.aficiones = [];
        this.anterior = {};
        this.anteriores = [];
        this.futuro = {};
        this.futuros = [];
        if (this.route.parent != null && this.route.parent != undefined) {
            this.subscription = this.route.parent.params.subscribe(function (params) {
                _this.pacienteId = params['id'];
            });
        }
    }
    NotaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maestrosService.getMaestros('tipnot')
            .subscribe(function (resource) {
            _this.tipos = resource;
        });
        this.notaId = String(this.route.snapshot.params['id']);
        //this.userId = String(this.route.snapshot.queryParams['user']);
        //this.dateId = String(this.route.snapshot.queryParams['dateId']); 
        //this.nombreU = String(this.route.snapshot.queryParams['nombreU']); 
        //this.nombreC = String(this.route.snapshot.queryParams['nombreC']); 
        if (this.notaId !== 'new') {
            this.title = 'Agregar evolución';
            this.getHistoriaById(this.notaId);
        }
        else {
            this.nota.act = true;
            this.nota.pac = this.pacienteId;
            this.nota.user = this.userId;
            this.nota.nombreU = "Doctor";
            this.nota.nombreC = 'paciente';
            this.title = 'Agregar historia clinica';
            console.log(this.nota);
        }
    };
    NotaComponent.prototype.getHistoriaById = function (id) {
        var _this = this;
        this.subscription = this.historiaService.getHistoriaById(id)
            .subscribe(function (data) {
            _this.nota = (data);
            _this.parientes = data.parientes;
            _this.conviven = data.conviven;
            _this.importantes = data.importantes;
            _this.colegios = data.colegios;
            _this.universidades = data.universidades;
            _this.aficiones = data.aficiones;
            _this.anteriores = data.aficionesanteriores;
            _this.futuros = data.aficionesfuturas;
            _this.trabajos = data.trabajos;
            _this.trabajo = data.trabajo || {};
            _this.mat = data.matrimonio || {};
            _this.soc = data.sociales || {};
            _this.ant = data.antecedentes || {};
            _this.desempeno = data.desempeno || {};
            _this.area = data.areasajuste || {};
        });
    };
    NotaComponent.prototype.addArrays = function () {
        //objetos:
        this.nota.antecedentes = this.ant;
        this.nota.sociales = this.soc;
        this.nota.matrimonio = this.mat;
        this.nota.desempeno = this.desempeno;
        this.nota.trabajo = this.trabajo;
        this.nota.areasajuste = this.area;
        this.nota.satisfaccionaficiones = Number(this.nota.satisfaccionaficiones);
        //arrays:
        this.nota.trabajos = this.trabajos;
        this.nota.parientes = this.parientes;
        this.nota.conviven = this.conviven;
        this.nota.importantes = this.importantes;
        this.nota.colegios = this.colegios;
        this.nota.universidades = this.universidades;
        this.nota.aficionesanteriores = this.anteriores;
        this.nota.aficiones = this.aficiones;
        this.nota.aficionesfuturas = this.futuros;
    };
    NotaComponent.prototype.addNota = function () {
        var _this = this;
        this.addArrays();
        // Required Fields
        if (!this.validateService.validateHistory(this.nota)) {
            this.flashMessage.show('Por favor ingrese todos los campos', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (this.notaId == 'new') {
            console.log(this.nota);
            this.subscription = this.historiaService.addHistoria(this.nota)
                .subscribe(function (data) {
                console.log(data);
                if (data.status = 201) {
                    _this.flashMessage.show('Historia clínica actualizado con éxito', { cssClass: 'alert-success', timeout: 90000 });
                    _this.router.navigate(['/historia', _this.pacienteId]);
                    _this.pubSubService.publish('notas-updated');
                }
                else {
                    _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 30000 });
                    _this.router.navigate(['/historia', _this.pacienteId]);
                }
            });
        }
        else {
            console.log(this.nota);
            this.subscription = this.historiaService.putHistoria(this.nota)
                .subscribe(function (data) {
                if (data.status = 201) {
                    _this.flashMessage.show('Historia clínica actualizado con éxito', { cssClass: 'alert-success', timeout: 90000 });
                    _this.router.navigate(['/historia', _this.pacienteId]);
                    _this.pubSubService.publish('notas-updated');
                }
                else {
                    _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 1000000 });
                    _this.router.navigate(['/historia', _this.pacienteId]);
                }
            });
        }
    };
    NotaComponent.prototype.delAficion = function (ind) {
        function deleteElem(element, index, array) {
            return (ind !== index);
        }
        this.aficiones = this.aficiones.filter(deleteElem);
        console.log(this.aficiones);
        return false;
    };
    NotaComponent.prototype.addAficion = function () {
        if (this.aficion.tipo == "" ||
            this.aficion.frecuencia == null ||
            this.aficion.satisfaccion == null) {
            alert("Debe ingresar todos los campos");
            return false;
        }
        this.aficiones.push(this.aficion);
        this.aficion = {};
        return false;
    };
    NotaComponent.prototype.delAnterior = function (ind) {
        function deleteElem(element, index, array) {
            return (ind !== index);
        }
        this.anteriores = this.anteriores.filter(deleteElem);
        console.log(this.anteriores);
        return false;
    };
    NotaComponent.prototype.addAnterior = function () {
        if (this.anterior.tipo == "" ||
            this.anterior.frecuencia == null ||
            this.anterior.frecuencia == null) {
            alert("Debe ingresar todos los campos");
            return false;
        }
        this.anteriores.push(this.anterior);
        this.anterior = {};
        return false;
    };
    NotaComponent.prototype.delFuturo = function (ind) {
        function deleteElem(element, index, array) {
            return (ind !== index);
        }
        this.futuros = this.futuros.filter(deleteElem);
        console.log(this.futuros);
        return false;
    };
    NotaComponent.prototype.addFuturo = function () {
        if (this.futuro.tipo == "" ||
            this.futuro.frecuencia == null ||
            this.futuro.satisfaccion == null) {
            alert("Debe ingresar todos los campos");
            return false;
        }
        this.futuros.push(this.futuro);
        this.futuro = {};
        return false;
    };
    NotaComponent.prototype.delTrabajo = function (ind) {
        function deleteElem(element, index, array) {
            return (ind !== index);
        }
        this.trabajos = this.trabajos.filter(deleteElem);
        console.log(this.trabajos);
        return false;
    };
    NotaComponent.prototype.addTrabajo = function () {
        if (this.trabajo1.entidad == "" ||
            this.trabajo1.fecha == null ||
            this.trabajo1.fecha == undefined ||
            this.trabajo1.fecha == "" ||
            this.trabajo1.cargo == "" ||
            this.trabajo1.retiro == "") {
            alert("Debe ingresar todos los campos");
            return false;
        }
        this.trabajos.push(this.trabajo1);
        this.trabajo1 = {};
        return false;
    };
    NotaComponent.prototype.delColegio = function (ind) {
        function deleteElem(element, index, array) {
            return (ind !== index);
        }
        this.colegios = this.colegios.filter(deleteElem);
        console.log(this.colegios);
        return false;
    };
    NotaComponent.prototype.addColegio = function () {
        if (this.colegio.edad == null ||
            this.colegio.fecha == null ||
            this.colegio.fecha == undefined ||
            this.colegio.fecha == "" ||
            this.colegio.colegio == "" ||
            this.colegio.institucion == "") {
            alert("Debe ingresar todos los campos");
            return false;
        }
        this.colegios.push(this.colegio);
        this.colegio = {};
        return false;
    };
    NotaComponent.prototype.delUniversidad = function (ind) {
        function deleteElem(element, index, array) {
            return (ind !== index);
        }
        this.universidades = this.universidades.filter(deleteElem);
        console.log(this.universidades);
        return false;
    };
    NotaComponent.prototype.addUniversidad = function () {
        if (this.universidad.edad == null ||
            this.universidad.fecha == null ||
            this.universidad.fecha == undefined ||
            this.universidad.fecha == "" ||
            this.universidad.carrera == "" ||
            this.universidad.institucion == "") {
            alert("Debe ingresar todos los campos");
            return false;
        }
        this.universidades.push(this.universidad);
        this.universidad = {};
        return false;
    };
    NotaComponent.prototype.delPariente = function (ind) {
        function deleteElem(element, index, array) {
            return (ind !== index);
        }
        //  this.parientes=this.parientes.filter(i => i!==index);
        this.parientes = this.parientes.filter(deleteElem);
        console.log(this.parientes);
        return false;
    };
    NotaComponent.prototype.addPariente = function () {
        if (this.pariente.nombre == "" || this.pariente.parentezco == "" ||
            this.pariente.edad == null ||
            this.pariente.ocupacion == "" ||
            this.pariente.satisfaccion == null) {
            alert("Debe ingresar todos los campos");
            return false;
        }
        this.parientes.push(this.pariente);
        this.pariente = {};
        return false;
    };
    NotaComponent.prototype.delConviven = function (i) {
        function deleteElem(element, index, array) {
            return (index !== i);
        }
        //  this.parientes=this.parientes.filter(i => i!==index);
        this.conviven = this.conviven.filter(deleteElem);
        console.log(this.conviven);
        return false;
    };
    NotaComponent.prototype.addConviven = function () {
        if (this.convive.nombre == "" || this.convive.relacion == "" ||
            this.convive.edad == null) {
            alert("Debe ingresar todos los campos");
            return false;
        }
        this.conviven.push(this.convive);
        this.convive = {};
        return false;
    };
    NotaComponent.prototype.delImportante = function (i) {
        function deleteElem(element, index, array) {
            return (i !== index);
        }
        //  this.parientes=this.parientes.filter(i => i!==index);
        this.importantes = this.importantes.filter(deleteElem);
        console.log(this.importantes);
        return false;
    };
    NotaComponent.prototype.addImportante = function () {
        if (this.importante.nombre == "" || this.importante.relacion == "" ||
            this.importante.edad == null) {
            alert("Debe ingresar todos los campos");
            return false;
        }
        this.importantes.push(this.importante);
        this.importante = {};
        return false;
    };
    /*
    validateNumber(value){
      console.log(value)
      switch (value){
        case 'edad':{
          if (Number(this.pariente.edad)<120 && Number(this.pariente.edad)>0){
            return true
          }
          this.pariente.edad=null
          // break
          return false
        }
        case 'satisfaccion':{
          if (Number(this.pariente.satisfaccion)<11 && Number(this.pariente.satisfaccion)>0){
            return true
          }
          this.pariente.satisfaccion=null
          break
        }
        default: {
          //statements;
          break;
       }
      }
    }
      if (!Number(value) || value==null){
    
        return false
      }
      if (edad==true && value>0 && value<120){
        return true
      }
      if (value<10) return true
    } */
    NotaComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        console.log('se destruyo el servicio');
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    NotaComponent = __decorate([
        core_1.Component({
            selector: 'app-nota',
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/components/historia/nota.component.html"),
            styles: [__webpack_require__("./src/app/components/historia/nota.component.css"), __webpack_require__("./src/app/components/_content/app.less")],
            providers: [historia_service_1.HistoriaService, pub_sub_service_1.PubSubService, maestros_service_1.MaestrosService],
            // make fade in animation available to this component
            animations: [index_1.slideInOutAnimation],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@slideInOutAnimation]': '' }
        }),
        __metadata("design:paramtypes", [validate_service_1.ValidateService,
            historia_service_1.HistoriaService,
            router_1.Router,
            router_1.ActivatedRoute,
            pub_sub_service_1.PubSubService,
            angular2_flash_messages_1.FlashMessagesService,
            maestros_service_1.MaestrosService])
    ], NotaComponent);
    return NotaComponent;
}());
exports.NotaComponent = NotaComponent;


/***/ }),

/***/ "./src/app/components/historia/paciente-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/historia/paciente-view.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<form *ngIf=\"paciente._id!=undefined\" class=\"form-inline\">\n    <a [routerLink]=\"['/maestros/paciente-edit', paciente._id]\"  class=\"btn btn-default\">Editar Paciente</a>    \n    <div class=\"form-group\">\n        <label for=\"tip\" class=\"control-label\">Tipo Documento</label>\n        <select name=\"tip\" [(ngModel)]=\"paciente.tip\" disabled=\"true\">\n            <option *ngFor=\"let i of tipos\" [ngValue]=\"i.cod\">{{i.des}}</option>\n        </select>\n    </div>\n    <div class=\"form-group\" >\n        <label for=\"id\" class=\"control-label\">Número de documento</label>      \n        <input type=\"text\" name=\"id\" [(ngModel)]=\"paciente.id\" class=\"form-control\" placeholder=\"Documento de identidad\" disabled=\"true\"/>          \n    </div>\n    <div class=\"form-group\">\n        <label for=\"nombres\" class=\"control-label\">Nombres</label>\n        <input type=\"text\" name=\"nombres\" [(ngModel)]=\"paciente.nombres\" class=\"form-control\"  placeholder=\"Nombre\" disabled=\"true\"/>\n    </div>\n      <div class=\"form-group\">\n        <label for=\"apellido1\" class=\"control-label\">Primer Apellido</label>\n        <input type=\"text\" name=\"apellido1\" [(ngModel)]=\"paciente.apellido1\" class=\"form-control\" placeholder=\"Primer Apellido\" disabled=\"true\"/>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"apellido2\" class=\"control-label\">Segundo Apellido</label>\n        <input type=\"text\" name=\"apellido2\" [(ngModel)]=\"paciente.apellido2\" class=\"form-control\" placeholder=\"Segundo Apellido\" disabled=\"true\"/>\n    </div>   \n    <div class=\"form-group\">\n        <label for=\"genero\" class=\"control-label\">Género</label>\n        <select name=\"genero\" [(ngModel)]=\"paciente.genero\" disabled=\"true\">\n        <option *ngFor=\"let i of generos\" [ngValue]=\"i.cod\">{{i.des}}</option>\n        </select>\n    </div>     \n    <div class=\"form-group\">\n        <label for=\"email\" class=\"control-label\">Email</label>\n        <input type=\"text\" name=\"email\" [(ngModel)]=\"paciente.email\" class=\"form-control\" placeholder=\"Correo electrónico\" disabled=\"true\"/>\n    </div>\n     <div class=\"input-group fluid\">\n         <label>Nacimiento</label>\n         <input type=\"date\" name=\"fechanac\" disabled=\"true\" [ngModel]=\"paciente.fechanac | date:'yyyy-MM-dd'\" (ngModelChange)=\"paciente.fechanac =\n         $event\" min=\"1900-01-01\" max=\"\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"estado\" class=\"control-label\">Estado Civil</label>\n            <select name=\"estado\" [(ngModel)]=\"paciente.estado\" disabled=\"true\">\n                <option *ngFor=\"let i of estados\" [ngValue]=\"i.cod\">{{i.des}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\" id=\"contenedor\" >\n            <label for=\"ciudad\" class=\"control-label\">Ciudad</label>\n            <select name=\"ciudad\" [(ngModel)]=\"paciente.ciudad\" disabled=\"true\">\n                <option *ngFor=\"let i of ciudades\" [ngValue]=\"i.cod\">{{i.des}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\" id=\"contenedor\" >\n            <label for=\"localidad\" class=\"control-label\">Localidad</label>\n            <select name=\"localidad\" [(ngModel)]=\"paciente.localidad\" disabled=\"true\">\n                <option *ngFor=\"let i of localidades\" [ngValue]=\"i.cod\">{{i.des}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\" id=\"contenedor\" >\n            <label for=\"barrio\" class=\"control-label\">Barrio</label>\n            <select name=\"barrio\" [(ngModel)]=\"paciente.barrio\" disabled=\"true\">\n                <option *ngFor=\"let i of barrios\" [ngValue]=\"i.cod\">{{i.des}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"direccion\" class=\"control-label\">Dirección</label>\n            <input type=\"text\" name=\"direccion\" [(ngModel)]=\"paciente.direccion\" class=\"form-control\" disabled=\"true\" placeholder=\"Dirección\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"telefono\" class=\"control-label\">Telefono</label>\n            <input type=\"text\" name=\"telefono\" [(ngModel)]=\"paciente.telefono\" class=\"form-control\" disabled=\"true\" placeholder=\"Telefonos\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"aseguradora\" class=\"control-label\">Aseguradora</label>\n            <select name=\"aseguradora\" [(ngModel)]=\"paciente.aseguradora\" disabled=\"true\">\n                <option *ngFor=\"let i of aseguradoras\" [ngValue]=\"i.cod\">{{i.des}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"vinculacion\" class=\"control-label\">Vinculación</label>\n            <select name=\"vinculacion\" [(ngModel)]=\"paciente.vinculacion\" disabled=\"true\">\n                <option *ngFor=\"let i of vinculaciones\" [ngValue]=\"i.cod\">{{i.des}}</option>\n            </select>\n        </div>  \n        <div class=\"form-group\">\n            <label for=\"ocupacion\" class=\"control-label\">Ocupación</label>\n            <select name=\"ocupacion\" [(ngModel)]=\"paciente.ocupacion\" disabled=\"true\">\n                <option *ngFor=\"let i of ocupaciones\" [ngValue]=\"i.cod\">{{i.des}}</option>\n            </select>\n        </div>  \n        <div class=\"form-group\">\n            <div class=\"form-group\">\n                <label for=\"responsable\" class=\"control-label\">Responsable</label>\n                <input type=\"text\" name=\"responsable\" [(ngModel)]=\"paciente.responsable\" class=\"form-control\" disabled=\"true\" placeholder=\"Responsable\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"parentescoresponsable\" class=\"control-label\">Parentesco Responsable</label>\n                <select name=\"parentescoresponsable\" [(ngModel)]=\"paciente.parentescoresponsable\" disabled=\"true\">\n                    <option *ngFor=\"let i of parentezcos\" [ngValue]=\"i.cod\">{{i.des}}</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"telresponsable\" class=\"control-label\">Teléfono Responsable</label>\n                <input type=\"text\" name=\"telresponsable\" [(ngModel)]=\"paciente.telresponsable\" class=\"form-control\" disabled=\"true\" placeholder=\"Telefono Responsable\" />\n            </div>  \n        </div>\n<!--     <div class=\"form-group\" *ngIf=\"paciente.created_at\">\n        <hr>\n        <label class=\"control-label\">Fecha Creación: {{paciente.created_at| date: 'yyyy-MM-dd HH:mm a' : paciente.offset}}</label>\n        <label class=\"control-label\">Fecha Modificación: {{paciente.updated_at| date: 'yyyy-MM-dd HH:mm a' : paciente.offset}}</label>\n    </div>\n    <div class=\"form-group\"> \n        <div class=\"form-group\">\n            <label for=\"act\" class=\"control-label\"><input type=\"checkbox\" name=\"act\" [(ngModel)]=\"paciente.act\" class=\"form-control\"/>Activo</label>\n        </div>\n    </div> -->\n</form>"

/***/ }),

/***/ "./src/app/components/historia/paciente-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var validate_service_1 = __webpack_require__("./src/app/services/validate.service.ts");
var paciente_service_1 = __webpack_require__("./src/app/services/paciente.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var maestros_service_1 = __webpack_require__("./src/app/services/maestros.service.ts");
var PacienteViewComponent = /** @class */ (function () {
    function PacienteViewComponent(validateService, pacienteService, router, route, flashMessage, maestrosService) {
        var _this = this;
        this.validateService = validateService;
        this.pacienteService = pacienteService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.maestrosService = maestrosService;
        this.title = 'Paciente ';
        this.paciente = {};
        this.pacienteDoc = {};
        this.barrios = [];
        this.generos = [];
        this.tipos = [];
        this.ciudades = [];
        this.estados = [];
        this.aseguradoras = [];
        this.vinculaciones = [];
        this.ocupaciones = [];
        this.parentezcos = [];
        this.localidades = [];
        if (this.route.firstChild != null && this.route.firstChild != undefined) {
            this.subscription = this.route.firstChild.params.subscribe(function (params) {
                _this.id = params['id'];
                console.log(_this.id);
                _this.getPacienteById(_this.id);
            });
        }
    }
    PacienteViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maestrosService.getMaestros('tipdoc')
            .subscribe(function (resource) {
            _this.tipos = resource;
        });
        this.maestrosService.getMaestros('genero')
            .subscribe(function (resource) {
            _this.generos = resource;
        });
        this.maestrosService.getMaestros('ciudad')
            .subscribe(function (resource) {
            _this.ciudades = resource;
        });
        this.maestrosService.getMaestros('estado_civil')
            .subscribe(function (resource) {
            _this.estados = resource;
        });
        this.maestrosService.getMaestros('localidad')
            .subscribe(function (resource) {
            _this.localidades = resource;
        });
        this.maestrosService.getMaestros('barrio')
            .subscribe(function (resource) {
            _this.barrios = resource;
        });
        this.maestrosService.getMaestros('aseguradora')
            .subscribe(function (resource) {
            _this.aseguradoras = resource;
        });
        this.maestrosService.getMaestros('vinculacion')
            .subscribe(function (resource) {
            _this.vinculaciones = resource;
        });
        this.maestrosService.getMaestros('ocupacion')
            .subscribe(function (resource) {
            _this.ocupaciones = resource;
        });
        this.maestrosService.getMaestros('parentezco')
            .subscribe(function (resource) {
            _this.parentezcos = resource;
        });
    };
    PacienteViewComponent.prototype.getPacienteById = function (id) {
        var _this = this;
        this.pacienteService.getPacienteById(id)
            .subscribe(function (data) {
            _this.paciente = (data);
            //console.log(this.paciente.fechanac)
            var a = _this.paciente.fechanac;
            console.log('fecha de nacimiento:' + a);
            //this.paciente.fechanac=this.paciente.fechanac.moment.format("YYYY-MM-DD")
            //a=this.paciente.fechanac.toISOString().subString(0,10)
        });
    };
    PacienteViewComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        console.log('se destruyo el servicio');
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        ;
    };
    PacienteViewComponent = __decorate([
        core_1.Component({
            selector: 'app-paciente-view',
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/components/historia/paciente-view.component.html"),
            styles: [__webpack_require__("./src/app/components/historia/paciente-view.component.css")],
            providers: [paciente_service_1.PacienteService, maestros_service_1.MaestrosService]
        }),
        __metadata("design:paramtypes", [validate_service_1.ValidateService,
            paciente_service_1.PacienteService,
            router_1.Router,
            router_1.ActivatedRoute,
            angular2_flash_messages_1.FlashMessagesService,
            maestros_service_1.MaestrosService])
    ], PacienteViewComponent);
    return PacienteViewComponent;
}());
exports.PacienteViewComponent = PacienteViewComponent;


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h2>TRANSFORMANDO EXPERIENCIAS BOGOTÁ D.C.</h2>\n  <p class=\"lead\">Centro de antención y acompañamiento psicológico especializado</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/dashboard']\">Ver Agenda / Historia</a> \n    <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Inicio</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Consultas con profesionales, especialistas y expertos</h3>\n    <p>Tratamiento especializado para familias, parejas, o situaciones personales que requieren acompañamiento profesional, o solo mejorar habilidades sociales y comportamentales</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Historia clínica electrónica confidencial en línea</h3>\n    <p>Contamos con la capacidad de atenderte desde otros lugares sin desplazarte de tu ciudad y manteniendo tu historial actualizado</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Agenda</h3>\n    <p>Controla el tiempo y asignación de citas con nuestros profesionales, especialistas y expertos</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Inicio de sesión</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Usuario</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" autocomplete=\"off\" required>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Iniciar\">\n</form>\n\n\n<!-- <div class=\"container2\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-6\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <h4>CAMBIO DE FOTO</h4>\n                        <form name=\"frm_foto\" id=\"frm_foto\" method=\"post\" action='' enctype=\"multipart/form-data\">\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label for=\"file\" class=\"col-md-3 control-label\">Foto</label>\n                                    <div class=\"col-md-9\">\n                                        <input class=\"form-control\" type=\"file\" name=\"file\">\n                                    </div>\n                                </div>\n                            </fieldset>\n                            <div class=\"col-lg-4\"></DIV>\n                            <div class=\"col-lg-4\">\n                                <button id=\"enviar\"  name=\"enviar\" class=\"btn btn-primary\" onclick=\"javascript:cambio_foto('71261757')\">GUARDAR</button>\n                            </div>\n                            <div class=\"col-lg-4\">\n                                \n                            </div><br>\n                            <div id=\"mensaje2\" class=\"col-lg-12\"></div>\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n -->"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Bienvenido a la historia Clínica', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            angular2_flash_messages_1.FlashMessagesService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/components/maestros/maestro.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/maestros/maestro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side-form\">\n<flash-messages></flash-messages>\n    <h3>{{title}}</h3>\n      <!-- <div class=\"form-inline\"> -->\n    <form (ngSubmit)=\"addMaestro()\">\n        <div class=\"form-group\">\n            <label for=\"tipo\" class=\"control-label\">tipo</label>\n            <input type=\"text\" name=\"tipo\" [(ngModel)]=\"maestro.tipo\" class=\"form-control\" required=\"true\" placeholder=\"Tipo\" readonly=\"true\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"cod\" class=\"control-label\">cod</label>\n            <input type=\"text\" name=\"cod\" [(ngModel)]=\"maestro.cod\" class=\"form-control\" placeholder=\"Código\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"des\" class=\"control-label\">desc</label>\n            <input type=\"text\" name=\"des\" [(ngModel)]=\"maestro.des\" class=\"form-control\" placeholder=\"Descripción\"/>\n        </div>\n        <div class=\"form-group\" >\n            <label for=\"ord\" class=\"control-label\">Orden</label>\n            <input type=\"text\" name=\"ord\" [(ngModel)]=\"maestro.ord\" class=\"form-control\" placeholder=\"Orden\"/>\n        </div>\n        <div class=\"form-group\" *ngIf=\"maestro.created_at\">\n                <hr>\n                <label class=\"control-label\">Fecha Creación: {{maestro.created_at| date: 'yyyy-MM-dd HH:mm a' : maestro.offset}}   //   Fecha Modificación: {{maestro.updated_at| date: 'yyyy-MM-dd HH:mm a' : maestro.offset}}</label>\n            <div >\n                <label for=\"act\" class=\"control-label\"><input type=\"checkbox\" name=\"act\" [(ngModel)]=\"maestro.act\" class=\"form-control\"/>Activo</label>\n            </div>            \n        </div>\n        <div class=\"form-group\">                \n            <a class=\"btn btn-warning\" [routerLink]=\"['/maestros/maestro', maestroTipo]\">Cancelar</a>\n            <!-- <button (click)=\"addMaestro()\" class=\"btn btn-default\">Guardar</button> -->\n            <button class=\"btn btn-primary\">Guardar</button> \n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/maestros/maestro.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var validate_service_1 = __webpack_require__("./src/app/services/validate.service.ts");
var maestros_service_1 = __webpack_require__("./src/app/services/maestros.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var index_1 = __webpack_require__("./src/app/components/_animations/index.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var MaestroComponent = /** @class */ (function () {
    function MaestroComponent(validateService, maestrosService, router, route, flashMessage) {
        this.validateService = validateService;
        this.maestrosService = maestrosService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.maestro = {};
        this.title = 'Agregar Maestro';
        this.maestroCod = {};
        this.user = {};
        this.tipos = [];
    }
    MaestroComponent.prototype.ngOnInit = function () {
        this.maestroId = String(this.route.snapshot.params['id']);
        this.maestroTipo = String(this.route.snapshot.queryParams['tipo']);
        if (this.maestroId !== 'new') {
            this.title = 'Editar Maestro';
            this.getMaestroById(this.maestroId);
        }
        else {
            this.title = 'Agregar Maestro';
            this.maestro.act = true;
            this.maestro.tipo = this.maestroTipo;
        }
    };
    MaestroComponent.prototype.getMaestroById = function (id) {
        var _this = this;
        this.maestrosService.getMaestroById(id)
            .subscribe(function (data) {
            _this.maestro = (data);
        });
    };
    MaestroComponent.prototype.addMaestro = function () {
        this.maestroTipo = String(this.route.snapshot.queryParams['tipo']);
        // Required Fields
        if (!this.validateService.validateMaestro(this.maestro)) {
            this.flashMessage.show('Por favor ingrese código y descripción', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.validateCod(this.maestroId, this.maestro.cod, this.maestroTipo);
    };
    MaestroComponent.prototype.validateCod = function (maestroId, maestroCod, tipo) {
        var _this = this;
        this.maestrosService.getMaestroByCod(maestroCod)
            .subscribe(function (data) {
            _this.maestroCod = data;
            if (_this.maestroCod == null || _this.maestroCod == undefined) {
                _this.saveMaestro(maestroId);
                return true;
            }
            else {
                if (_this.maestroCod._id == maestroId) {
                    _this.saveMaestro(maestroId);
                    return true;
                }
                else {
                    if (tipo !== _this.maestroCod.tipo) {
                        _this.saveMaestro(maestroId);
                        return true;
                    }
                    else {
                        _this.flashMessage.show('Código de maestro ya existe, por favor ingrese otro', { cssClass: 'alert-danger', timeout: 3000 });
                        return false;
                    }
                }
            }
        });
    };
    MaestroComponent.prototype.saveMaestro = function (maestroId) {
        var _this = this;
        if (maestroId == 'new') {
            this.maestrosService.addMaestro(this.maestro)
                .subscribe(function (data) {
                if (data.status = 201) {
                    _this.flashMessage.show('Maestro registrado con éxito', { cssClass: 'alert-success', timeout: 930000 });
                    _this.router.navigate(['/maestros/maestro/', _this.maestro.tipo]);
                }
                else {
                    _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 930000 });
                    _this.router.navigate(['/maestros/maestro/', _this.maestro.tipo]);
                }
            });
        }
        else {
            this.maestrosService.putMaestro(this.maestro)
                .subscribe(function (data) {
                if (data.status = 201) {
                    _this.flashMessage.show('Maestro actualizado con éxito', { cssClass: 'alert-success', timeout: 930000 });
                    _this.router.navigate(['/maestros/maestro/', _this.maestro.tipo]);
                }
                else {
                    _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 930000 });
                    _this.router.navigate(['/maestros/maestro/', _this.maestro.tipo]);
                }
            });
        }
    };
    MaestroComponent = __decorate([
        core_1.Component({
            selector: 'app-maestro',
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/components/maestros/maestro.component.html"),
            styles: [__webpack_require__("./src/app/components/maestros/maestro.component.css"), __webpack_require__("./src/app/components/_content/app.less")],
            providers: [maestros_service_1.MaestrosService],
            // make fade in animation available to this component
            animations: [index_1.slideInOutAnimation],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@slideInOutAnimation]': '' }
        }),
        __metadata("design:paramtypes", [validate_service_1.ValidateService,
            maestros_service_1.MaestrosService,
            router_1.Router,
            router_1.ActivatedRoute,
            angular2_flash_messages_1.FlashMessagesService])
    ], MaestroComponent);
    return MaestroComponent;
}());
exports.MaestroComponent = MaestroComponent;


/***/ }),

/***/ "./src/app/components/maestros/maestros-pre.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <ul class=\"nav nav-tabs\">\n  <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/register']\">Usuarios</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/pacientes']\">Pacientes</a></li>\n        <li role=\"presentation\" class=\"divider\"></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','estado_civil']\">Estado Civil</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','barrio']\">Barrio</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','localidad']\">Localidad</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','ciudad']\">Ciudades</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','genero']\">Géneros</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','diagnosticos']\">Diagnósticos</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','si_no']\">Si/No</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','tipdoc']\">Tipo Documento</a></li>    \n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','aseguradora']\">Aseguradora</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','vinculacion']\">Vinculación</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','ocupacion']\">Ocupaciones</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','parentezco']\">Parentezco</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','escala']\">Escala</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','tipnot']\">Tipo Nota</a></li>        \n    </ul>\n</header>\n\n<main>\n    <router-outlet></router-outlet>\n</main>\n<!-- <div class=\"container\" >\n    \n    <div class=\"dropdown\">\n      <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" id=\"menu\" aria-extended=\"true\">Seleccione el maestro por favor\n      <span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu\">\n                <li><a href=\"#\">Estado civil</a></li>\n                <li><a href=\"maestros/maestro/genero\">Sexo</a></li>\n                <li><a (click)=\"navigate('pais')\">Paises</a></li>\n                <li class=\"divider\"></li>\n                <li><a (click)=\"navigate('eps')\">EPS</a></li>\n                 <li><a [routerLink]=\"['/maestros/maestro', 'departamento']\">departamento</a></li>\n       </ul>\n    </div>\n</div>\n<br> \n\n<div class=\"container\" style=\"margin-bottom: 15px;\">\n  <div class=\"btn-toolbar bs-component\" style=\"margin: 0;\">\n    <div class=\"btn-group\">\n      <a  class=\"btn btn-default\">Seleccione</a>\n      <a  class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></a>\n      <ul class=\"dropdown-menu\">\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/register']\">Usuarios</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/pacientes']\">Pacientes</a></li>\n        <li role=\"presentation\" class=\"divider\"></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','eps']\">EPS</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','estado_civil']\">EStado Civil</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','pais']\">Paises</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','departamento']\">Departamentos</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','ciudad']\">Ciudades</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','genero']\">Géneros</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','diagnosticos']\">Diagnósticos</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','si_no']\">Si/No</a></li>\n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','tipdoc']\">Tipo Documento</a></li>    \n        <li role=\"presentation\"><a role=\"item\" [routerLink]=\"['/maestros/maestro','escala']\">Escala</a></li>      \n      </ul>\n    </div>\n  </div>\n</div>\n<br>  -->"

/***/ }),

/***/ "./src/app/components/maestros/maestros-pre.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var MaestrosPreComponent = /** @class */ (function () {
    function MaestrosPreComponent(router, flashMessage, route) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.route = route;
    }
    MaestrosPreComponent.prototype.ngOnInit = function () {
    };
    MaestrosPreComponent = __decorate([
        core_1.Component({
            moduleId: module.i.toString(),
            selector: 'app-maestros-pre',
            template: __webpack_require__("./src/app/components/maestros/maestros-pre.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router,
            angular2_flash_messages_1.FlashMessagesService,
            router_1.ActivatedRoute])
    ], MaestrosPreComponent);
    return MaestrosPreComponent;
}());
exports.MaestrosPreComponent = MaestrosPreComponent;


/***/ }),

/***/ "./src/app/components/maestros/maestros.component.html":
/***/ (function(module, exports) {

module.exports = "<div><h1>{{title}} </h1>\n<hr>\n<a [routerLink]=\"['/maestros/maestro-edit', 'new']\" [queryParams]=\"{tipo: tipo}\"  class=\"btn btn-default\">Nuevo</a>\n<div class=\"table-responsive\">\n    <table class=\"generic-table table table-bordered table-border table-hover\">\n        <tr class=\"success\">\n            <th>Tipo</th>\n            <th>Orden</th>\n            <th>Código</th>\n            <th>Descripción</th>\n           <!--  <th>Atributo1</th>\n            <th>Atributo2</th>\n            <th>Atributo3</th> -->\n            <th>Activo</th>\n            <th class=\"delete-column\"></th>\n            <th class=\"edit-column\"></th>\n        </tr>\n        <tr *ngFor=\"let maestro of maestros\">\n            <td>{{maestro.tipo}}</td>\n            <td>{{maestro.ord}}</td>\n            <td><a [routerLink]=\"['/maestros/maestro-edit', maestro._id]\" [queryParams]=\"{tipo: tipo}\">{{maestro.cod}}</a></td>\n            <td><a [routerLink]=\"['/maestros/maestro-edit', maestro._id]\" [queryParams]=\"{tipo: tipo}\">{{maestro.des}}</a></td>\n           <!--  <td>{{maestro.atri1}}</td>\n            <td>{{maestro.atri2}}</td>\n            <td>{{maestro.atri3}}</td> -->\n            <td><input type=\"checkbox\" name=\"act\" [(ngModel)]=\"maestro.act\" disabled=\"true\"/></td>\n            <td><a [routerLink]=\"['/maestros/maestro-edit', maestro._id]\" [queryParams]=\"{tipo: tipo}\" class=\"btn btn-xs btn-default\">Editar</a></td>\n            <td><a (click)=\"deleteMaestro(maestro._id)\" class=\"btn btn-xs btn-danger\">Borrar</a></td>\n        </tr>\n    </table>\n</div>\n<h3>Cantidad: {{maestroscount}}</h3></div>\n<div class=\"view-side-form\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/components/maestros/maestros.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var maestros_service_1 = __webpack_require__("./src/app/services/maestros.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var index_1 = __webpack_require__("./src/app/components/_animations/index.ts");
var pub_sub_service_1 = __webpack_require__("./src/app/services/pub-sub.service.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var MaestrosComponent = /** @class */ (function () {
    //  @input()tipo: String;       
    function MaestrosComponent(maestrosService, router, pubSubService, flashMessage, route) {
        var _this = this;
        this.maestrosService = maestrosService;
        this.router = router;
        this.pubSubService = pubSubService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.onMaestros();
                //console.log('path = ', event)
            }
        });
    }
    MaestrosComponent.prototype.onMaestros = function () {
        var tipo = String(this.route.snapshot.params['tipo']);
        this.tipo = tipo;
        this.title = 'MAESTRO ' + tipo.toUpperCase();
        this.pubSubService.publish('maestros-updated');
    };
    MaestrosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.pubSubService.on('maestros-updated')
            .subscribe(function () { return _this.getMaestros(_this.tipo); });
        this.onMaestros();
    };
    MaestrosComponent.prototype.getMaestros = function (tipo) {
        var _this = this;
        this.maestrosService.getMaestros(tipo).subscribe(function (res) {
            _this.maestros = res;
            _this.maestroscount = +_this.maestros.length;
        });
    };
    MaestrosComponent.prototype.deleteMaestro = function (id) {
        var _this = this;
        this.maestrosService.deleteMaestro(id)
            .subscribe(function (data) {
            if (data.status = 201) {
                _this.flashMessage.show('Maestro eliminado con éxito', { cssClass: 'alert-success', timeout: 3000 });
                _this.pubSubService.publish('maestros-updated');
            }
            else {
                _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    MaestrosComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        //console.log('se destruyo el servicio')
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        ;
    };
    MaestrosComponent = __decorate([
        core_1.Component({
            moduleId: module.i.toString(),
            selector: 'app-maestros',
            template: __webpack_require__("./src/app/components/maestros/maestros.component.html"),
            styles: [__webpack_require__("./src/app/components/_content/app.less")],
            // make fade in animation available to this component
            animations: [index_1.fadeInAnimation],
            providers: [maestros_service_1.MaestrosService, pub_sub_service_1.PubSubService],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' },
        }),
        __metadata("design:paramtypes", [maestros_service_1.MaestrosService,
            router_1.Router,
            pub_sub_service_1.PubSubService,
            angular2_flash_messages_1.FlashMessagesService,
            router_1.ActivatedRoute])
    ], MaestrosComponent);
    return MaestrosComponent;
}());
exports.MaestrosComponent = MaestrosComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n            <a class=\"navbar-brand\">HISTORIA CLINICA</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\" id=\"navbar\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" data-toggle=\"collapse\" data-target=\"#navbar\"><a [routerLink]=\"['/']\">Inicio</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" data-toggle=\"collapse\" data-target=\"#navbar\" ><a [routerLink]=\"['/maestros']\">Maestros</a></li>\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" data-toggle=\"collapse\" data-target=\"#navbar\" ><a [routerLink]=\"['/dashboard']\">Agenda</a></li>\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" data-toggle=\"collapse\" data-target=\"#navbar\" ><a [routerLink]=\"['/profile']\">Perfil</a></li>\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" data-toggle=\"collapse\" data-target=\"#navbar\" ><a [routerLink]=\"['/login']\">Iniciar Sesión</a></li>\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" data-toggle=\"collapse\" data-target=\"#navbar\" ><a [routerLink]=\"['/historia']\">Historia</a></li>\n                <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Salir</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Hasta pronto', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            angular2_flash_messages_1.FlashMessagesService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/pacientes/paciente.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pacientes/paciente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side-form\">\n<flash-messages></flash-messages>\n<h3 class=\"page-header\">{{title}}</h3>\n    <!-- <div class=\"form-inline\"> -->\n    <form (ngSubmit)=\"onRegisterSubmit()\">\n        <span class=\"form-inline\">  \n           <div class=\"form-group\" >\n             <label for=\"tip\" class=\"control-label\">Tipo Documento</label>\n             <select name=\"tip\" [(ngModel)]=\"paciente.tip\">\n                <option *ngFor=\"let i of tipos\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n           </div>\n           <div class=\"form-group\" >\n            <label for=\"id\" class=\"control-label\">Número de documento</label>      \n            <input type=\"text\" name=\"id\" [(ngModel)]=\"paciente.id\" class=\"form-control\" required=\"true\" placeholder=\"Documento de identidad\" />          \n           </div>\n        </span>\n        <hr>\n        <span class=\"form-inline\">  \n        <div class=\"form-group\">\n            <label for=\"nombres\" class=\"control-label\">Nombres</label>\n            <input type=\"text\" name=\"nombres\" [(ngModel)]=\"paciente.nombres\" class=\"form-control\" required=\"true\" placeholder=\"Nombre\" />\n        </div>\n          <div class=\"form-group\">\n            <label for=\"apellido1\" class=\"control-label\">Primer Apellido</label>\n            <input type=\"text\" name=\"apellido1\" [(ngModel)]=\"paciente.apellido1\" class=\"form-control\" required=\"true\" placeholder=\"Primer Apellido\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"apellido2\" class=\"control-label\">Segundo Apellido</label>\n            <input type=\"text\" name=\"apellido2\" [(ngModel)]=\"paciente.apellido2\" class=\"form-control\" required=\"true\" placeholder=\"Segundo Apellido\" />\n        </div>        \n        <div class=\"form-group\">\n            <label for=\"email\" class=\"control-label\">Email</label>\n            <input type=\"text\" name=\"email\" [(ngModel)]=\"paciente.email\" class=\"form-control\" placeholder=\"Correo electrónico\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"genero\" class=\"control-label\">Género</label>\n             <select name=\"genero\" [(ngModel)]=\"paciente.genero\">\n                <option *ngFor=\"let i of generos\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n        </div>\n        <div class=\"input-group fluid\">\n            <label>Nacimiento</label>\n            <input type=\"date\" name=\"fechanac\"  [ngModel]=\"paciente.fechanac | date:'yyyy-MM-dd'\" (ngModelChange)=\"paciente.fechanac =\n            $event\" min=\"1900-01-01\" max=\"\"/>\n        </div>\n\n<!--  \n            (input)=\"updateDate($event)\"\n    \n    <div class=\"form-group\">\n         <label for=\"fechanac\" class=\"control-label\">Fecha de nacimiento</label>\n         <input type=\"date\" id=\"fechanac\" [(ngModel)]=\"paciente.fechanac\" name=\"fechanac\" class=\"form-control\" required/>\n        </div> -->\n        <div class=\"form-group\">\n            <label for=\"estado\" class=\"control-label\">Estado Civil</label>\n            <select name=\"estado\" [(ngModel)]=\"paciente.estado\">\n                <option *ngFor=\"let i of estados\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n        </div>\n        <div class=\"form-group\" id=\"contenedor\" >\n            <label for=\"ciudad\" class=\"control-label\">Ciudad</label>\n            <select name=\"ciudad\" [(ngModel)]=\"paciente.ciudad\">\n                <option *ngFor=\"let i of ciudades\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n        </div>\n        <div class=\"form-group\" id=\"contenedor\" >\n            <label for=\"localidad\" class=\"control-label\">Localidad</label>\n            <select name=\"localidad\" [(ngModel)]=\"paciente.localidad\">\n                <option *ngFor=\"let i of localidades\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n        </div>\n        <div class=\"form-group\" id=\"contenedor\" >\n            <label for=\"barrio\" class=\"control-label\">Barrio</label>\n            <select name=\"barrio\" [(ngModel)]=\"paciente.barrio\">\n                <option *ngFor=\"let i of barrios\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"direccion\" class=\"control-label\">Dirección</label>\n            <input type=\"text\" name=\"direccion\" [(ngModel)]=\"paciente.direccion\" class=\"form-control\" required=\"true\" placeholder=\"Dirección\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"telefono\" class=\"control-label\">Telefono</label>\n            <input type=\"text\" name=\"telefono\" [(ngModel)]=\"paciente.telefono\" class=\"form-control\" required=\"true\" placeholder=\"Telefonos\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"aseguradora\" class=\"control-label\">Aseguradora</label>\n             <select name=\"aseguradora\" [(ngModel)]=\"paciente.aseguradora\">\n                <option *ngFor=\"let i of aseguradoras\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"vinculacion\" class=\"control-label\">Vinculación</label>\n             <select name=\"vinculacion\" [(ngModel)]=\"paciente.vinculacion\">\n                <option *ngFor=\"let i of vinculaciones\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n        </div>  \n        <div class=\"form-group\">\n            <label for=\"ocupacion\" class=\"control-label\">Ocupación</label>\n             <select name=\"ocupacion\" [(ngModel)]=\"paciente.ocupacion\">\n                <option *ngFor=\"let i of ocupaciones\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n        </div>  \n        <div class=\"form-group\">\n        <div class=\"form-group\">\n            <label for=\"responsable\" class=\"control-label\">Responsable</label>\n            <input type=\"text\" name=\"responsable\" [(ngModel)]=\"paciente.responsable\" class=\"form-control\" required=\"true\" placeholder=\"Responsable\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"parentescoresponsable\" class=\"control-label\">Parentesco Responsable</label>\n             <select name=\"parentescoresponsable\" [(ngModel)]=\"paciente.parentescoresponsable\">\n                <option *ngFor=\"let i of parentezcos\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"telresponsable\" class=\"control-label\">Teléfono Responsable</label>\n            <input type=\"text\" name=\"telresponsable\" [(ngModel)]=\"paciente.telresponsable\" class=\"form-control\" required=\"true\" placeholder=\"Telefono Responsable\" />\n        </div>  \n        </div>\n        </span>\n        <div class=\"form-group\" *ngIf=\"paciente.created_at\">\n            <hr>\n            <label class=\"control-label\">Fecha Creación: {{paciente.created_at| date: 'yyyy-MM-dd HH:mm a' : paciente.offset}}</label>\n            <label class=\"control-label\">Fecha Modificación: {{paciente.updated_at| date: 'yyyy-MM-dd HH:mm a' : paciente.offset}}</label>\n        </div>\n        <div class=\"form-inline\"> \n            <div class=\"form-group\">\n            <label for=\"act\" class=\"control-label\"><input type=\"checkbox\" name=\"act\" [(ngModel)]=\"paciente.act\" class=\"form-control\"/>Activo</label>\n            </div>\n            <div class=\"form-group\">\n            <flash-messages></flash-messages>\n            <a class=\"btn btn-warning\" [routerLink]=\"['/maestros/pacientes']\">Cancelar</a>\n                    <!-- <button (click)=\"addMaestro()\" class=\"btn btn-default\">Guardar</button> -->\n            <button class=\"btn btn-primary\">Guardar</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/pacientes/paciente.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var validate_service_1 = __webpack_require__("./src/app/services/validate.service.ts");
var paciente_service_1 = __webpack_require__("./src/app/services/paciente.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var index_1 = __webpack_require__("./src/app/components/_animations/index.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var maestros_service_1 = __webpack_require__("./src/app/services/maestros.service.ts");
//import { Moment } from 'moment'
var PacienteComponent = /** @class */ (function () {
    function PacienteComponent(validateService, pacienteService, router, route, flashMessage, maestrosService) {
        this.validateService = validateService;
        this.pacienteService = pacienteService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.maestrosService = maestrosService;
        //nacimiento: date
        this.title = 'Agregar Paciente';
        this.paciente = {};
        this.pacienteDoc = {};
        this.barrios = [];
        this.generos = [];
        this.tipos = [];
        this.ciudades = [];
        this.estados = [];
        this.aseguradoras = [];
        this.vinculaciones = [];
        this.ocupaciones = [];
        this.parentezcos = [];
        this.localidades = [];
    }
    PacienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.pacienteService.newPaciente(this.paciente)
        var pacienteId = this.route.snapshot.params['id'];
        if (pacienteId !== 'new') {
            this.getPacienteById(pacienteId);
            this.title = 'Editar Paciente';
        }
        else {
            this.paciente.act = true;
        }
        this.maestrosService.getMaestros('tipdoc')
            .subscribe(function (resource) {
            _this.tipos = resource;
        });
        this.maestrosService.getMaestros('genero')
            .subscribe(function (resource) {
            _this.generos = resource;
        });
        this.maestrosService.getMaestros('ciudad')
            .subscribe(function (resource) {
            _this.ciudades = resource;
        });
        this.maestrosService.getMaestros('estado_civil')
            .subscribe(function (resource) {
            _this.estados = resource;
        });
        this.maestrosService.getMaestros('localidad')
            .subscribe(function (resource) {
            _this.localidades = resource;
        });
        this.maestrosService.getMaestros('barrio')
            .subscribe(function (resource) {
            _this.barrios = resource;
        });
        this.maestrosService.getMaestros('aseguradora')
            .subscribe(function (resource) {
            _this.aseguradoras = resource;
        });
        this.maestrosService.getMaestros('vinculacion')
            .subscribe(function (resource) {
            _this.vinculaciones = resource;
        });
        this.maestrosService.getMaestros('ocupacion')
            .subscribe(function (resource) {
            _this.ocupaciones = resource;
        });
        this.maestrosService.getMaestros('parentezco')
            .subscribe(function (resource) {
            _this.parentezcos = resource;
        });
    };
    PacienteComponent.prototype.onRegisterSubmit = function () {
        var id = String(this.route.snapshot.params['id']);
        var email = String(this.paciente.email);
        // Required Fields
        if (!this.validateService.validatePaciente(this.paciente)) {
            this.flashMessage.show('Ingrese el tipo y número de documento, los nombres y el primer apellido', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(email)) {
            this.flashMessage.show('Por favor ingrese un email válido', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Identificacion    
        this.validateDoc(id, this.paciente.id);
    };
    PacienteComponent.prototype.getPacienteById = function (id) {
        var _this = this;
        this.pacienteService.getPacienteById(id)
            .subscribe(function (data) {
            _this.paciente = (data);
            //console.log(this.paciente.fechanac)
            var a = _this.paciente.fechanac;
            console.log(a);
            //this.paciente.fechanac=this.paciente.fechanac.moment.format("YYYY-MM-DD")
            //a=this.paciente.fechanac.toISOString().subString(0,10)
        });
    };
    PacienteComponent.prototype.validateDoc = function (id, doc) {
        var _this = this;
        this.pacienteService.getPacienteByDoc(doc)
            .subscribe(function (data) {
            _this.pacienteDoc = data;
            if (_this.pacienteDoc == null || _this.pacienteDoc == undefined) {
                _this.savePaciente(id);
                return true;
            }
            else {
                if (_this.pacienteDoc._id == id) {
                    _this.savePaciente(id);
                    return true;
                }
                else {
                    _this.validar = false;
                    _this.flashMessage.show('Número de documento ya existe, por favor ingrese otro', { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            }
        });
    };
    PacienteComponent.prototype.savePaciente = function (id) {
        var _this = this;
        console.log(this.paciente.fechanac);
        if (id == 'new') {
            this.pacienteService.newPaciente(this.paciente)
                .subscribe(function (data) {
                if (data.success = true) {
                    _this.flashMessage.show('Paciente registrado, ya puede iniciar la atención', { cssClass: 'alert-success', timeout: 930000 });
                    _this.router.navigate(['/maestros/pacientes']);
                }
                else {
                    _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 930000 });
                    _this.router.navigate(['/maestros/pacientes']);
                }
            });
        }
        else {
            this.pacienteService.putPaciente(this.paciente)
                .subscribe(function (data) {
                if (data.success = true) {
                    _this.flashMessage.show('Paciente actualizado con éxito', { cssClass: 'alert-success', timeout: 930000 });
                    _this.router.navigate(['/maestros/pacientes']);
                }
                else {
                    _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 930000 });
                    _this.router.navigate(['/maestros/pacientes']);
                }
            });
        }
    };
    PacienteComponent = __decorate([
        core_1.Component({
            selector: 'app-paciente',
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/components/pacientes/paciente.component.html"),
            styles: [__webpack_require__("./src/app/components/pacientes/paciente.component.css"), __webpack_require__("./src/app/components/_content/app.less")],
            providers: [paciente_service_1.PacienteService, maestros_service_1.MaestrosService],
            // make fade in animation available to this component
            animations: [index_1.slideInOutAnimation],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@slideInOutAnimation]': '' }
        }),
        __metadata("design:paramtypes", [validate_service_1.ValidateService,
            paciente_service_1.PacienteService,
            router_1.Router,
            router_1.ActivatedRoute,
            angular2_flash_messages_1.FlashMessagesService,
            maestros_service_1.MaestrosService])
    ], PacienteComponent);
    return PacienteComponent;
}());
exports.PacienteComponent = PacienteComponent;


/***/ }),

/***/ "./src/app/components/pacientes/pacientes.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>{{title}} </h1>\n    <hr>\n    <a [routerLink]=\"['/maestros/paciente-edit','new']\"  class=\"btn btn-default\">Nuevo</a>\n    <div class=\"table-responsive\">\n        <table class=\"generic-table table table-bordered table-border table-hover\">\n            <tr class=\"success\">\n                <th>Tipo Doc</th>\n                <th>Documento</th>\n                <th>Nombre</th>\n                <th>Fecha nacimiento</th>\n         <!--        <th>Género</th>\n                <th>Estado</th>\n                <th>Ciudad</th> -->\n                <th>Correo Electrónico</th>\n                <th>Creado</th>\n                <th>Modificado</th>\n                <th>Activo</th>\n                <th class=\"delete-column\"></th>\n                <th class=\"edit-column\"></th>\n            </tr>\n            <tr *ngFor=\"let paciente of pacientes\">\n                <td>{{paciente.tip}}</td>\n                <td><a [routerLink]=\"['/maestros/paciente-edit', paciente._id]\">{{paciente.id}}</a></td>\n                <td><a [routerLink]=\"['/maestros/paciente-edit', paciente._id]\">{{paciente.nombres}} {{paciente.apellido1}} {{paciente.apellido2}}</a></td>\n                <td>{{paciente.fechanac| date: 'yyyy-MM-dd'}}</td>\n               <!--  <td>{{paciente.genero}}</td>\n                <td>{{paciente.estado}}</td>\n                <td>{{paciente.ciudad}}</td> -->\n                <td>{{paciente.email}}</td>\n                <td>{{paciente.created_at| date: 'yyyy-MM-dd HH:mm a' : paciente.offset}}</td>\n                <td>{{paciente.updated_at| date: 'yyyy-MM-dd HH:mm a' : paciente.offset}}</td>\n                <td><input type=\"checkbox\" name=\"act\" [(ngModel)]=\"paciente.act\" disabled=\"true\"/></td>\n                <td><a [routerLink]=\"['/maestros/paciente-edit', paciente._id]\" class=\"btn btn-xs btn-default\">Editar</a></td>\n                <td><a (click)=\"deletePaciente(paciente._id)\" class=\"btn btn-xs btn-danger\">Borrar</a></td>\n            </tr>\n        </table>\n    </div>\n    <h3>Cantidad: {{pacientescount}}</h3>\n</div>\n<div class=\"view-side-form\">\n        <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/components/pacientes/pacientes.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var paciente_service_1 = __webpack_require__("./src/app/services/paciente.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var index_1 = __webpack_require__("./src/app/components/_animations/index.ts");
var pub_sub_service_1 = __webpack_require__("./src/app/services/pub-sub.service.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var PacientesComponent = /** @class */ (function () {
    //  @input()tipo: String;       
    function PacientesComponent(pacienteService, router, pubSubService, flashMessage, route) {
        this.pacienteService = pacienteService;
        this.router = router;
        this.pubSubService = pubSubService;
        this.flashMessage = flashMessage;
        this.route = route;
    }
    PacientesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPacientes();
        this.title = 'Pacientes';
        this.subscription = this.pubSubService.on('pacientes-updated')
            .subscribe(function () { return _this.getPacientes(); });
    };
    PacientesComponent.prototype.getPacientes = function () {
        var _this = this;
        this.pacienteService.getPacientes().subscribe(function (res) {
            _this.pacientes = res;
            _this.pacientescount = +_this.pacientes.length;
            console.log(_this.pacientes);
        });
    };
    PacientesComponent.prototype.deletePaciente = function (id) {
        var _this = this;
        this.pacienteService.deletePaciente(id)
            .subscribe(function (data) {
            if (data.status = 201) {
                _this.flashMessage.show('Paciente eliminado con éxito', { cssClass: 'alert-success', timeout: 3000 });
                _this.pubSubService.publish('pacientes-updated');
            }
            else {
                _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    PacientesComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        console.log('se destruyo el servicio');
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        ;
    };
    PacientesComponent = __decorate([
        core_1.Component({
            moduleId: module.i.toString(),
            selector: 'app-pacientes',
            template: __webpack_require__("./src/app/components/pacientes/pacientes.component.html"),
            styles: [__webpack_require__("./src/app/components/_content/app.less")],
            // make fade in animation available to this component
            animations: [index_1.fadeInAnimation],
            providers: [paciente_service_1.PacienteService, pub_sub_service_1.PubSubService],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [paciente_service_1.PacienteService,
            router_1.Router,
            pub_sub_service_1.PubSubService,
            angular2_flash_messages_1.FlashMessagesService,
            router_1.ActivatedRoute])
    ], PacientesComponent);
    return PacientesComponent;
}());
exports.PacientesComponent = PacientesComponent;


/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Usuario: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/components/prueba/item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var core_2 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var item_model_1 = __webpack_require__("./src/app/components/prueba/item.model.ts");
var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ItemComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", item_model_1.Item)
    ], ItemComponent.prototype, "item", void 0);
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'app-item',
            styles: ['div {border: 1px solid black}'],
            template: "\n    <div>\n      <h3>{{ title }}</h3>\n      <p>\n        <label>Items:</label>\n        <span>{{item.item1}} {{item.item2}}</span>\n      </p>\n    </div>",
            changeDetection: core_2.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;


/***/ }),

/***/ "./src/app/components/prueba/item.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    return Item;
}());
exports.Item = Item;


/***/ }),

/***/ "./src/app/components/prueba/prueba.component.html":
/***/ (function(module, exports) {

module.exports = "    <h1>PruebaAPP</h1>\n    <p>{{ ng4 }}</p>\n    <button type=\"button\" (click)=\"ChangeItemObject()\">\n      Next Item Object\n    </button>\n    <app-item [title]=\"title1\" [item]=\"items\"></app-item>"

/***/ }),

/***/ "./src/app/components/prueba/prueba.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var item_model_1 = __webpack_require__("./src/app/components/prueba/item.model.ts");
var PruebaComponent = /** @class */ (function () {
    function PruebaComponent() {
        this.ng4 = 'Realizado con Angular 4';
        this.title1 = 'Algo Inicial';
        this.items = new item_model_1.Item('Item', 'Inicial');
    }
    PruebaComponent.prototype.ChangeItemObject = function () {
        this.items = new item_model_1.Item('Segundo', 'Item');
    };
    PruebaComponent = __decorate([
        core_1.Component({
            selector: 'app-prueba',
            template: __webpack_require__("./src/app/components/prueba/prueba.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PruebaComponent);
    return PruebaComponent;
}());
exports.PruebaComponent = PruebaComponent;


/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side-form\">\n    <h3 class=\"page-header\">{{title}}</h3>\n<!-- <flash-messages></flash-messages> -->\n      <!-- <div class=\"form-inline\"> -->\n    <form (ngSubmit)=\"onRegisterSubmit()\">\n       <span  class=\"form-inline\">\n            <div class=\"form-group\" >\n             <label for=\"tip\" class=\"control-label\">Tipo Documento</label>\n             <select name=\"tip\" [(ngModel)]=\"user.tip\">\n                <option *ngFor=\"let i of tipos\" [ngValue]=\"i.cod\">{{i.des}}</option>\n             </select>\n            </div>\n            <div class=\"form-group\" >\n                <label for=\"id\" class=\"control-label\">Número de documento</label>      \n                <input type=\"text\" name=\"id\" [(ngModel)]=\"user.id\" class=\"form-control\" required=\"true\" placeholder=\"Documento de identidad\" />          \n            </div>\n        <hr>\n        <div class=\"form-group\" >\n            <label for=\"name\" class=\"control-label\">Nombre y apellidos</label>\n            <input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" class=\"form-control\" required=\"true\" placeholder=\"Nombre completo\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"username\" class=\"control-label\">Usuario</label>\n            <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" class=\"form-control\" placeholder=\"Nombre de usuario\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\" class=\"control-label\">Email</label>\n            <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\" placeholder=\"Correo electrónico\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\" class=\"control-label\">Contraseña</label>\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" placeholder=\"Contraseña\"/>\n        </div>\n           <hr >\n        <div  class=\"form-inline\" class=\"form-group\" > \n            <label for=\"super\" class=\"control-label\"><input type=\"checkbox\" name=\"super\" [(ngModel)]=\"user.super\" class=\"form-control\" readonly=\"true\" />Super Usuario</label>\n            <label for=\"psico\" class=\"control-label\"><input type=\"checkbox\" name=\"psico\" [(ngModel)]=\"user.psico\" class=\"form-control\"/>Psicólogo</label>\n            <label for=\"admon\" class=\"control-label\"><input type=\"checkbox\" name=\"admon\" [(ngModel)]=\"user.admon\" class=\"form-control\"/>Administración</label>\n        </div>\n        <div class=\"form-group\" *ngIf=\"user.created_at\">\n        <hr>\n        <label class=\"control-label\">Fecha Creación: {{user.created_at| date: 'yyyy-MM-dd HH:mm a' : user.offset}}  \n        </label>\n            <label class=\"control-label\">  \n                Fecha Modificación: {{user.updated_at| date: 'yyyy-MM-dd HH:mm a' : user.offset}}</label>\n        </div>\n        <div>\n         <label for=\"act\" class=\"control-label\"><input type=\"checkbox\" name=\"act\" [(ngModel)]=\"user.act\" class=\"form-control\"/>Activo</label>\n        </div>            \n        <flash-messages></flash-messages>        \n        <div class=\"form-group\">        \n            <a class=\"btn btn-warning\" [routerLink]=\"['/maestros/register']\">Cancelar</a>\n            <button class=\"btn btn-primary\">Guardar</button> \n        </div>\n    </span>\n </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var validate_service_1 = __webpack_require__("./src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var index_1 = __webpack_require__("./src/app/components/_animations/index.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var maestros_service_1 = __webpack_require__("./src/app/services/maestros.service.ts");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router, route, flashMessage, maestrosService) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.maestrosService = maestrosService;
        // @Input('tipo') tipo: String;
        this.title = 'Agregar Usuario';
        this.userUsername = {};
        this.userDoc = {};
        this.user = {};
        this.tipos = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   let username=this.user.username
        this.maestrosService.getMaestros('tipdoc')
            .subscribe(function (data) {
            _this.tipos = data;
        });
        var userId = String(this.route.snapshot.params['id']);
        if (userId !== 'new') {
            this.getUserById(userId);
            this.title = 'Editar Usuario';
        }
        else {
            this.user.act = true;
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var userId = String(this.route.snapshot.params['id']);
        // Required Fields
        if (!this.validateService.validateRegister(this.user)) {
            this.flashMessage.show('Por favor ingrese todos los campos', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(this.user.email)) {
            this.flashMessage.show('Por favor ingrese un email válido', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.validateId(userId, this.user.id, this.user.username);
    };
    RegisterComponent.prototype.getUserById = function (id) {
        var _this = this;
        this.authService.getUserById(id)
            .subscribe(function (data) {
            _this.user = (data);
        });
    };
    RegisterComponent.prototype.saveUser = function (userId) {
        var _this = this;
        if (userId == 'new') {
            this.authService.registerUser(this.user)
                .subscribe(function (data) {
                //if(data.status=201){
                if (data.success = true) {
                    // console.log('new 201')
                    _this.flashMessage.show('Usuario registrado, ya puede iniciar sesión', { cssClass: 'alert-success', timeout: 930000 });
                    //  this.pubSubService.publish('users-updated');          
                    _this.router.navigate(['/maestros/register']);
                }
                else {
                    //   console.log('new 501')
                    _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 930000 });
                    _this.router.navigate(['/maestros/register']);
                }
            });
        }
        else {
            this.authService.putUser(this.user)
                .subscribe(function (data) {
                if (data.success = true) {
                    // console.log('update 201')
                    _this.flashMessage.show('Usuario actualizado con éxito', { cssClass: 'alert-success', timeout: 930000 });
                    //    this.pubSubService.publish('users-updated');          
                    _this.router.navigate(['/maestros/register']);
                }
                else {
                    //console.log('update 501')
                    _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 930000 });
                    _this.router.navigate(['/maestros/register']);
                }
            });
        }
    };
    RegisterComponent.prototype.validateId = function (userId, userDoc, Username) {
        var _this = this;
        this.authService.getUserByDoc(userDoc)
            .subscribe(function (data) {
            _this.userDoc = data;
            if (_this.userDoc == null || _this.userDoc == undefined) {
                _this.validateName(userId, Username);
                return true;
            }
            else {
                if (_this.userDoc._id == userId) {
                    _this.validateName(userId, Username);
                    return true;
                }
                else {
                    _this.validar = false;
                    _this.flashMessage.show('Número de documento ya existe, por favor ingrese otro', { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            }
        });
    };
    RegisterComponent.prototype.validateName = function (userId, userName) {
        var _this = this;
        this.authService.getUserByUserName(userName)
            .subscribe(function (data) {
            _this.userUsername = data;
            if (_this.userUsername == null || _this.userUsername == undefined) {
                _this.saveUser(userId);
                console.log('salvar null');
                return true;
            }
            else {
                if (_this.userUsername._id == userId) {
                    _this.saveUser(userId);
                    console.log(_this.userUsername._id + ' salvar id igual: ' + userId);
                    return true;
                }
                else {
                    _this.validar = false;
                    _this.flashMessage.show('Nombre de usuario ya existe, por favor ingrese otro', { cssClass: 'alert-danger', timeout: 3000 });
                    console.log(_this.userUsername.id + ' NO GUARDAR id DIF: ' + userId + 'USUARIO: ' + userName);
                    return false;
                }
            }
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/_content/app.less")],
            providers: [auth_service_1.AuthService, maestros_service_1.MaestrosService],
            // make fade in animation available to this component
            animations: [index_1.slideInOutAnimation],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@slideInOutAnimation]': '' }
        }),
        __metadata("design:paramtypes", [validate_service_1.ValidateService,
            auth_service_1.AuthService,
            router_1.Router,
            router_1.ActivatedRoute,
            angular2_flash_messages_1.FlashMessagesService,
            maestros_service_1.MaestrosService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/components/register/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>{{title}} </h1>\n    <hr>\n    <a [routerLink]=\"['/maestros/register-edit','new']\" class=\"btn btn-default\">Nuevo</a>\n    <div class=\"table-responsive table\">\n        <table class=\"users-table table table-bordered table-border table-hover\">\n            <tr class=\"success\">\n                <th>Tipo Doc</th>\n                <th>Documento</th>\n                <th>Nombre</th>\n                <th>Usuario</th>\n                <th>Correo Electrónico</th>\n                <th>Super Usuario</th>\n                <th>Psicólogo</th>\n                <th>admon</th>\n                <th>Creado</th>\n                <th>Modificado</th>\n                <th>Activo</th>\n                <th class=\"delete-column\"></th>\n                <th class=\"edit-column\"></th>\n            </tr>\n            <tr *ngFor=\"let user of users\">\n                <td>{{user.tip}}</td>\n                <td>{{user.id}}</td>\n                <td><a [routerLink]=\"['/maestros/register-edit', user._id]\">{{user.name}}</a></td>\n                <td><a [routerLink]=\"['/maestros/register-edit', user._id]\">{{user.username}}</a></td>\n                <td>{{user.email}}</td>\n                <td><input type=\"checkbox\" name=\"super\" [(ngModel)]=\"user.super\" disabled=\"true\" /></td>\n                <td><input type=\"checkbox\" name=\"psico\" [(ngModel)]=\"user.psico\" disabled=\"true\" /></td>\n                <td><input type=\"checkbox\" name=\"admon\" [(ngModel)]=\"user.admon\" disabled=\"true\" /></td>\n                <td>{{user.created_at| date: 'yyyy-MM-dd HH:mm a' : user.offset}}</td>\n                <td>{{user.updated_at| date: 'yyyy-MM-dd HH:mm a' : user.offset}}</td>\n                <td><input type=\"checkbox\" name=\"act\" [(ngModel)]=\"user.act\" disabled=\"true\" /></td>\n                <td><a [routerLink]=\"['/maestros/register-edit', user._id]\" class=\"btn btn-xs btn-default\">  <span class=\"fa fa-user-circle\"></span></a></td>\n                <td><a (click)=\"deleteUser(user._id)\" class=\"btn btn-xs btn-danger\">Borrar</a></td>\n            </tr>\n        </table>\n    </div>\n    <h3>Cantidad: {{userscount}}</h3>\n</div>\n<div class=\"view-side-form\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/components/register/users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var index_1 = __webpack_require__("./src/app/components/_animations/index.ts");
var pub_sub_service_1 = __webpack_require__("./src/app/services/pub-sub.service.ts");
var angular2_flash_messages_1 = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
var UsersComponent = /** @class */ (function () {
    //  @input()tipo: String;       
    function UsersComponent(authService, router, pubSubService, flashMessage, route) {
        this.authService = authService;
        this.router = router;
        this.pubSubService = pubSubService;
        this.flashMessage = flashMessage;
        this.route = route;
    }
    UsersComponent.prototype.onUsers = function () {
        var _this = this;
        //let tipo=String(this.route.snapshot.params['tipo']);
        //this.tipo=tipo;
        this.getUsers();
        this.title = 'Usuarios';
        this.subscription = this.pubSubService.on('users-updated')
            .subscribe(function () { return _this.getUsers(); });
    };
    UsersComponent.prototype.ngOnInit = function () {
        //  let tipo=[{cod:'CC', nombre:'Cedula'},{cod:'TI',nombre:'Tarjeta Identidad'}];
        this.onUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.authService.getUsers().subscribe(function (res) {
            _this.users = res;
            _this.userscount = +_this.users.length;
        });
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.authService.deleteUser(id)
            .subscribe(function (data) {
            if (data.status = 201) {
                _this.flashMessage.show('Usuario eliminado con éxito', { cssClass: 'alert-success', timeout: 3000 });
                _this.pubSubService.publish('users-updated');
            }
            else {
                _this.flashMessage.show('Algo salió mal :-(', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        console.log('se destruyo el servicio');
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        ;
    };
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.i.toString(),
            selector: 'app-users',
            template: __webpack_require__("./src/app/components/register/users.component.html"),
            styles: [__webpack_require__("./src/app/components/_content/app.less")],
            // make fade in animation available to this component
            animations: [index_1.fadeInAnimation],
            providers: [auth_service_1.AuthService, pub_sub_service_1.PubSubService],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            pub_sub_service_1.PubSubService,
            angular2_flash_messages_1.FlashMessagesService,
            router_1.ActivatedRoute])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    AuthService.prototype.getUsers = function () {
        var ep = this.prepEndpoint('users/users/');
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (id) {
        var ep = this.prepEndpoint('users/usersDel/' + id);
        return this.http.delete(ep)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.putUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/user');
        return this.http.put(ep, JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserByUserName = function (username) {
        var ep = this.prepEndpoint('users/user/' + username);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserByDoc = function (doc) {
        var ep = this.prepEndpoint('users/userDoc/' + doc);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserById = function (id) {
        var ep = this.prepEndpoint('users/register/' + id);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.UserData = function () {
        return localStorage;
        //this.authToken = token;
        //this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/services/historia.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var HistoriaService = /** @class */ (function () {
    function HistoriaService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    HistoriaService.prototype.addHistoria = function (nota) {
        console.log(nota);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('historias/nota');
        return this.http.post(ep, JSON.stringify(nota), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HistoriaService.prototype.putHistoria = function (nota) {
        console.log(nota);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('historias/nota');
        return this.http.put(ep, JSON.stringify(nota), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HistoriaService.prototype.getNotas = function (id) {
        var ep = this.prepEndpoint('historias/notas/' + id);
        console.log(id);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    HistoriaService.prototype.getHistoriaById = function (id) {
        var ep = this.prepEndpoint('historias/nota/' + id);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    /*    deleteHistoria(id){
       let ep = this.prepEndpoint('historia/historiaDel/'+ id);
       return this.http.delete(ep)
           .map(res => res.json());
       } */
    HistoriaService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    HistoriaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HistoriaService);
    return HistoriaService;
}());
exports.HistoriaService = HistoriaService;


/***/ }),

/***/ "./src/app/services/maestros.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var MaestrosService = /** @class */ (function () {
    function MaestrosService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    MaestrosService.prototype.addMaestro = function (maestro) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('maestros/maestro');
        return this.http.post(ep, JSON.stringify(maestro), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MaestrosService.prototype.putMaestro = function (maestro) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('maestros/maestro');
        return this.http.put(ep, JSON.stringify(maestro), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MaestrosService.prototype.getMaestros = function (tipo) {
        var ep = this.prepEndpoint('maestros/maestrosAll/' + tipo);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    MaestrosService.prototype.getMaestroById = function (id) {
        var ep = this.prepEndpoint('maestros/maestro/' + id);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    MaestrosService.prototype.getMaestroByCod = function (cod) {
        var ep = this.prepEndpoint('maestros/maestroCod/' + cod);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    MaestrosService.prototype.deleteMaestro = function (id) {
        var ep = this.prepEndpoint('maestros/maestrosDel/' + id);
        return this.http.delete(ep)
            .map(function (res) { return res.json(); });
    };
    MaestrosService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    MaestrosService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MaestrosService);
    return MaestrosService;
}());
exports.MaestrosService = MaestrosService;


/***/ }),

/***/ "./src/app/services/paciente.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
//import {tokenNotExpired} from 'angular2-jwt';
var PacienteService = /** @class */ (function () {
    function PacienteService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    PacienteService.prototype.getPacientes = function () {
        var ep = this.prepEndpoint('pacientes/pacientes');
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    PacienteService.prototype.getPacActivos = function () {
        var ep = this.prepEndpoint('pacientes/pacientes');
        return this.http.get(ep)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.filter(function (pac) { return pac.act === true; }); });
    };
    PacienteService.prototype.deletePaciente = function (id) {
        var ep = this.prepEndpoint('pacientes/pacientesDel/' + id);
        return this.http.delete(ep)
            .map(function (res) { return res.json(); });
    };
    PacienteService.prototype.putPaciente = function (paciente) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('pacientes/paciente');
        return this.http.put(ep, JSON.stringify(paciente), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PacienteService.prototype.getPacienteByDoc = function (doc) {
        var ep = this.prepEndpoint('pacientes/pacienteDoc/' + doc);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    PacienteService.prototype.getPacienteById = function (id) {
        var ep = this.prepEndpoint('pacientes/paciente/' + id);
        return this.http.get(ep)
            .map(function (res) { return res.json(); });
    };
    PacienteService.prototype.newPaciente = function (paciente) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('pacientes/pacientenew');
        return this.http.post(ep, paciente, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PacienteService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    PacienteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PacienteService);
    return PacienteService;
}());
exports.PacienteService = PacienteService;


/***/ }),

/***/ "./src/app/services/pub-sub.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var PubSubService = /** @class */ (function () {
    function PubSubService() {
        this.subjects = [];
    }
    PubSubService.prototype.publish = function (eventName) {
        // ensure a subject for the event name exists
        this.subjects[eventName] = this.subjects[eventName] || new Subject_1.Subject();
        // publish event
        this.subjects[eventName].next();
        //  console.log('publicado(servicio)')
    };
    PubSubService.prototype.on = function (eventName) {
        // ensure a subject for the event name exists
        this.subjects[eventName] = this.subjects[eventName] || new Subject_1.Subject();
        //console.log('leido (servicio)')
        // return observable 
        return this.subjects[eventName].asObservable();
    };
    PubSubService = __decorate([
        core_1.Injectable()
    ], PubSubService);
    return PubSubService;
}());
exports.PubSubService = PubSubService;


/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
__webpack_require__("./node_modules/rxjs/Rx.js");
var ValidateService = /** @class */ (function () {
    //users: Array<any>;
    function ValidateService(authService) {
        this.authService = authService;
        this.user = [];
        this.paciente = [];
    }
    ValidateService.prototype.validateEmail = function (email) {
        if (!email) {
            return true;
        }
        else {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    };
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateMaestro = function (maestro) {
        if (maestro.cod == undefined || maestro.des == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateDate = function (date) {
        if (date.pac == undefined || date.start == null || date.end == null || date.pac == null || date.start == undefined || date.end == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePaciente = function (paciente) {
        if (paciente.nombres == undefined || paciente.apellido1 == undefined || paciente.id == undefined || paciente.tip == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateHistory = function (nota) {
        if (nota.motivo == undefined ||
            nota.enfact == undefined ||
            nota.tipo == undefined
        //nota.antecedentes == undefined
        ) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], ValidateService);
    return ValidateService;
}());
exports.ValidateService = ValidateService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var p = platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
p.then(function () { window.appBootstrap && window.appBootstrap(); });
// .catch(err => console.error(err));


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular and is loaded before the app.
// You can add your own extra polyfills to this file.
__webpack_require__("./node_modules/core-js/es6/symbol.js");
__webpack_require__("./node_modules/core-js/es6/object.js");
__webpack_require__("./node_modules/core-js/es6/function.js");
__webpack_require__("./node_modules/core-js/es6/parse-int.js");
__webpack_require__("./node_modules/core-js/es6/parse-float.js");
__webpack_require__("./node_modules/core-js/es6/number.js");
__webpack_require__("./node_modules/core-js/es6/math.js");
__webpack_require__("./node_modules/core-js/es6/string.js");
__webpack_require__("./node_modules/core-js/es6/date.js");
__webpack_require__("./node_modules/core-js/es6/array.js");
__webpack_require__("./node_modules/core-js/es6/regexp.js");
__webpack_require__("./node_modules/core-js/es6/map.js");
__webpack_require__("./node_modules/core-js/es6/set.js");
__webpack_require__("./node_modules/core-js/es6/reflect.js");
__webpack_require__("./node_modules/core-js/es7/reflect.js");
__webpack_require__("./node_modules/zone.js/dist/zone.js");
// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
// Needed for: IE9
// import 'classlist.js';
// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';
// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';
// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map