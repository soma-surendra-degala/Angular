import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {

  constructor(private route : ActivatedRoute){}

  productName=""

  ngOnInit(): void {

    this.productName=this.route.snapshot.params['id'];  
  }

}
