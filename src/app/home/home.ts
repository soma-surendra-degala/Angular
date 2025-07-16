import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  constructor(private router:Router){}

  goToLine(){
    this.router.navigate(['line'])
  }
    goToBar(){
    this.router.navigate(['bar'])
  }
    goToPie(){
    this.router.navigate(['pie'])
  }
    goToDought(){
    this.router.navigate(['doughtnut'])
  }

}
