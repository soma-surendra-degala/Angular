import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule,HttpClientModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  constructor(private router:Router,private http:HttpClient){}

  //  goToPromise(){
  //   this.router.navigate(['promise']);
  // }
  // goToObservable(){
  //   this.router.navigate(['observable'])
  // }

  ngOnInit(): void {
      this.getUser();
      this.getContact();
      this.getProduct();
  }

  

  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{
      console.log(res);
    });
  }
  getProduct(){
    this.http.get('http://somethings.com/api/product').subscribe((res)=>{
      console.log(res);
    });

  }
  getContact(){
    this.http.get('http://somethings.com/api/contact').subscribe((res)=>{
      console.log(res);
    });

  }

}
