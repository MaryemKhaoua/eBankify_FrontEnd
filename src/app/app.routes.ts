import { Routes } from '@angular/router';
import {LoginComponent} from './Components/Auth/Login/login.component';
import {RegisterComponent} from './Components/Auth/register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const routes: Routes = [
  {path: ' ' , component: LoginComponent},
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent}
];
