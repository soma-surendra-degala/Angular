import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Data } from "./data";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({  providedIn: 'root'
})
export class ResolveGuard implements Resolve<string> {
  constructor(private dataService: Data, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
    return this.dataService.getData();
  }
}