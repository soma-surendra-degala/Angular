import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Movie } from './movie/movie';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:Login},
    {path:'Home',component:Home},
    {path:'Movie/:type/:id',component:Movie},
    {path:'**',component:Login}



];
