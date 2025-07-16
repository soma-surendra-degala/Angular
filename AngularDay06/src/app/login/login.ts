import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username="";
  password="";
  errMsg="";

  constructor(private auth: Auth ,private router:Router){}

  login(){
    if(this.username.trim().length===0){
      this.errMsg="Username is required";
    }else if(this.password.trim().length===0){
      this.errMsg="Password is required";
  }else{
    this.errMsg="";
    let res=this.auth.login(this.username,this.password);
    if(res===200){
      this.router.navigate(['Home'])
    }
    if(res===403){
      this.errMsg="Invalid Credentials";  
    }
  }
}

}
