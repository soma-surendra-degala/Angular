import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private router:Router,private auth:Auth){}


  goToHome(){
      this.router.navigate(['Home']);
  }
  logout(){
      this.auth.logout();
  }

}
