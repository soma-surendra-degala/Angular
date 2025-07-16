import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-source',
  imports: [],
  templateUrl: './source.html',
  styleUrl: './source.css'
})
export class Source {

  constructor(private router:Router) { }

  goToDestination(){
    this.router.navigate(['/destination']);
  }

}
