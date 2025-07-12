import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{
  loading: boolean = false;
  facts=[ 
'71 branches all over the world',
 '23561 employees so far',
'Has Sold 1.3 Million+ laptops',
'The four cubes in the logo represent the four companies merged',
'Second highest smart phone producer in the country',
'4.7% PC revenue share by vendor worldwide 2018 to 2021',
  ]
  count=1;
  fact='71 branches all over the world';

  constructor(private router: Router) {
  this.router.events.subscribe(event => {
      // Show the spinner when navigation starts
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      // Hide the spinner when navigation ends
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }
    })

  }

  ngOnInit() {
this.count=1,
setInterval
(() => {
  this.fact=this.facts[this.count];
  if(this.count<5){
      this.count++;
  }else{
    this.count=0;
  }
  },4000)

}

}