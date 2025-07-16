import { Routes } from '@angular/router';
import { Home } from './home/home';
import'./upload/upload';
import './login/login';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' },

    {path:'home',component:Home},
{
  path: 'login',
  loadComponent: () => import('./login/login').then(m => m.Login)
},
    {path:'upload', loadComponent: () => import('./upload/upload').then(m => m.Upload),
    canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
