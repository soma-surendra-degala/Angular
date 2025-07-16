import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private router= inject(Router)
  
  contact(){
    console.log("Trying to Update the Database");
    setTimeout(()=>{
      console.log("Database is Upadated");
      this.router.navigate(['/Contact'])
    },2000)

  }

}
