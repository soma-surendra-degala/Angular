import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [NgbModalModule,RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private router:Router){}

  goToHome(){
    this.router.navigate(['home']);

  }
  goToProducts(){
        this.router.navigate(['products']);


  }
  goToAbout(){
        this.router.navigate(['about']);


  }
  goToContact(){
        this.router.navigate(['contact']);


  }
  goToOffers(){
        this.router.navigate(['offers']);


  } 
  goToAdmin(){
          this.router.navigate(['admin']);
  }
}

