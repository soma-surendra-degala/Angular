import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-two-child-one',
  imports: [],
  templateUrl: './parent-two-child-one.html',
  styleUrl: './parent-two-child-one.scss'
})
export class ParentTwoChildOne {
  ngDoCheck() {
    console.log('Parent Two Child One change detection triggered');
  }
  
  onclick() {
  }

}
