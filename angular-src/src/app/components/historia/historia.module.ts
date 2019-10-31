import { NgModule } from '@angular/core';
import { HistoriaComponent } from './historia.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotaComponent } from './nota.component';
import { HistoriaPreComponent } from './historia-pre.component';
import { PacienteViewComponent } from './paciente-view.component';
import { AuthGuard } from '../../guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

const routes: Routes = [
{path: '', component: HistoriaPreComponent,canActivate:[AuthGuard],
    children: [
    {path: ':id', component: HistoriaComponent,canActivate:[AuthGuard],     
    children:[
      {path: 'nota/:id', component: NotaComponent,canActivate:[AuthGuard]
    }]
  }]
}]
  
  
@NgModule({
  imports: [ CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    FlashMessagesModule,
     ],
  declarations: [HistoriaComponent,NotaComponent, HistoriaPreComponent,PacienteViewComponent],
  exports: [RouterModule]
})
export class HistoriaModule {}
