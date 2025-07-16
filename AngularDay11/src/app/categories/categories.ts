import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [CommonModule
    
  ],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {
categories = [
  { name: 'Laptops', img: 'assets/laptop.jpg' },
  { name: 'Mobiles', img: 'assets/mobile.jpg' },
  { name: 'Printers', img: 'assets/printer.jpg' },
  { name: 'Speakers', img: 'assets/speaker.jpg' }
];

}
