import { Routes } from '@angular/router';
import { Source } from './source/source';
import { Destination } from './destination/destination';
import { ResolveGuard } from './resolve-guard';

export const routes: Routes = [

    {path: '', redirectTo: '/source', pathMatch: 'full'},
    {path:'source',component: Source,resolve:{data: ResolveGuard}},
    {path:'destination',component: Destination,resolve:{data: ResolveGuard} },
];
