import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/register/users.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaestrosComponent } from './components/maestros/maestros.component';
import { MaestrosPreComponent } from './components/maestros/maestros-pre.component';
import { MaestroComponent } from './components/maestros/maestro.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { PacienteComponent } from './components/pacientes/paciente.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ItemComponent } from './components/prueba/item.component';
import {AuthGuard} from './guards/auth.guard';


const appRoutes: Routes =  [
  //{path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'', pathMatch: 'full',component: HomeComponent, canActivate:[AuthGuard],data: { roles: ["super","psico","admon"] } },
  {path:'login', component: LoginComponent},
  {path:'profile', component: PruebaComponent, canActivate:[AuthGuard],data: { roles: ["super"] } },
  {path: 'maestros', component: MaestrosPreComponent,canActivate:[AuthGuard],data: { roles: ["super","admon"] } ,
    children: [
        {path: 'maestro/:tipo', component: MaestrosComponent,canActivate:[AuthGuard]},
        {path: 'maestro-edit/:id', component: MaestroComponent,canActivate:[AuthGuard]},   
        {path:'register', component: UsersComponent,canActivate:[AuthGuard]},
        {path:'register-edit/:id', component: RegisterComponent,canActivate:[AuthGuard]},
        {path:'pacientes', component: PacientesComponent,canActivate:[AuthGuard]},
        {path:'paciente-edit/:id', component: PacienteComponent,canActivate:[AuthGuard]}
        ]
    },
  { path: 'dashboard', loadChildren: 'app/components/dashboard/dashboard.module#DashboardModule' , canActivate:[AuthGuard],data: { roles: ["super","admon"] } },
  { path: 'historia', loadChildren: 'app/components/historia/historia.module#HistoriaModule' , canActivate:[AuthGuard],data: { roles: ["super","psico"] } },
        // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

//Solo con modulos se puede hacer lazy load. Se encapsula en modulos y no se importa, sino que se 
//referencia la ruta del modul que solo se carga al llamarlos:
//path:'ejemplo', loadChildren:'../../about/about.module#AboutModule'


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }

export const routedComponents = [
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    HomeComponent,
    MaestrosComponent,
    MaestroComponent,
    MaestrosPreComponent,
    PacienteComponent,
    PacientesComponent,
    ProfileComponent,
    PruebaComponent,
    ItemComponent
]