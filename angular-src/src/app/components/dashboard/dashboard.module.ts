import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { RouterModule, Routes } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarUtils } from './calendar-utils/module';
import { DashboardComponent } from './dashboard.component';
import { DashboardPreComponent } from './dashboard-pre.component';
import { DateComponent } from './date.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from '../../guards/auth.guard';

    const routes: Routes = [
        {path: '', component: DashboardPreComponent,canActivate: [AuthGuard],
        children:[        
          {path: 'dashboard/:id', component: DashboardComponent,canActivate:[AuthGuard]},
          {path: 'date/:id', component: DateComponent,canActivate:[AuthGuard]}
        ]}]
        
  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      CalendarModule.forRoot(),
      CalendarUtils,
      RouterModule.forChild(routes),
      FlashMessagesModule
    ],
    declarations: [DashboardComponent,DashboardPreComponent,DateComponent],
    exports: [RouterModule,NgbModalModule,CalendarModule]
  })
export class DashboardModule {}

