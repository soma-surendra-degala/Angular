import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data {
  
  getData(){
    return of("Data fetched successfully!").pipe(
      delay(10000)) ;
  }
}
