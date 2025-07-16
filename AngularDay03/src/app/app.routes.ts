import { Routes } from '@angular/router';
import {Home} from './home/home'
import { App } from './app';
import { Products } from './products/products';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Product } from './product/product';

export const routes: Routes = [
    {path:'', redirectTo:'Home', pathMatch:"full"},
    {path:'Home', component:Home},
    {path:'Products', component:Products},
    {path:'About', component:About},
    {path:'Contact', component:Contact},
    {path:'',component:Product},
    {path:'Product/:id',component:Product},
    {path:"**", redirectTo:'Home'}

];
