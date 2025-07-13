import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  imports: [CommonModule],
  templateUrl: './offers.html',
  styleUrl: './offers.css'
})
export class Offers {

  offers = [
  { img: 'assets/sale.jpg' },
  { img: 'assets/shipping.jpg' },
  { img: 'assets/emi.jpg' }
];

}
