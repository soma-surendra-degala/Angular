import { Routes } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';

export const routes: Routes = [
    {path:'',redirectTo:'first',pathMatch:'full'},
    {path:'first',component:First},
    {path:'second',component:Second}
];
