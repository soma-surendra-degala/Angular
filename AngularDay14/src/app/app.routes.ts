import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Line } from './line/line';
import { Pie } from './pie/pie';
import { Bar } from './bar/bar';
import { Doughnut } from './doughnut/doughnut';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'line',component:Line},
    {path:'pie',component:Pie},
    {path:'bar',component:Bar},
    {path:'doughnut',component:Doughnut}


];
