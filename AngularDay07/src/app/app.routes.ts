import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Offers } from './offers/offers';
import { Admin } from './admin/admin';
import { EditAbout } from './edit-about/edit-about';
import { NotFound } from './not-found/not-found';
import { AccessDenied } from './access-denied/access-denied';
import { authGuard } from './services/auth-guard';
import { roleGuard } from './services/role-guard';
import { notCompleteGuard } from './services/not-complete-guard';
import { moduleGuard } from './services/module-guard';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'products',component:Products},
    {path:'about',component:About,
        canActivateChild:[roleGuard],
        children:[{
            path:'edit-about',component:EditAbout}]
    },
    {path:'contact',component:Contact,canDeactivate:[notCompleteGuard]},
    {path:'offers',component:Offers,canMatch:[moduleGuard]

    },
    {path:'admin',component:Admin,canActivate:[authGuard]},
    {path:'access-denied',component:AccessDenied},
    {path:'**',component:NotFound}
];
