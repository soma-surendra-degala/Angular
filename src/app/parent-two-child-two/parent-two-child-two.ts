import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-two-child-two',
  imports: [],
  templateUrl: './parent-two-child-two.html',
  styleUrl: './parent-two-child-two.scss'
})
export class ParentTwoChildTwo {
  ngDoCheck() {
    console.log('Parent Two Child Two change detection triggered');
  }
  
  onclick() {
  }

}
