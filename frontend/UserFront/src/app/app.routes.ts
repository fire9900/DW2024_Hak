import { Routes } from '@angular/router';
import { AuthComponent } from  './auth/auth.component';
import { DashboardComponent } from  './dashboard/dashboard.component';
import { CalendarComponent } from  './calendar/calendar.component';
import { PrizesComponent } from  './prizes/prizes.component';
import { AdminComponent } from "./admin/admin.component";
import { authGuard } from './auth.guard';
import {AddachivmentComponent} from "./addachivment/addachivment.component";


export const routes: Routes = [
    {path: 'login', component: AuthComponent, title: 'Авторизация'},
    {path: '', component: DashboardComponent, canActivate: [authGuard]},
    // {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '', title: 'Главная', canActivateChild: [authGuard], children: [
      {path: 'dashboard', component: DashboardComponent, title: 'Главная'},
      {path: 'calendar', component: CalendarComponent, title: 'Календарь'},
      {path: 'prizes', component: PrizesComponent, title: 'Призы'},
      {path: 'admin', component: AdminComponent, title: 'Панель администратора'},
      {path: 'add-achivment', component: AddachivmentComponent, title: 'Добавление достижения'},
    ]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
