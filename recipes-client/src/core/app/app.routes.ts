import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/login/login.page';
import { HomePage } from './features/home/home.page';
import { RegisterPage } from './features/auth/register/register.page';

export const routes: Routes =
[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginPage,
  },

  {
    path: 'register',
    component: RegisterPage,
  },

  {
    path: 'home',
    component: HomePage,
  },

  {
    path: '**',
    redirectTo: 'home',
  }
];