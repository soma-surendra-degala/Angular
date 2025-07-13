import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

  numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}
