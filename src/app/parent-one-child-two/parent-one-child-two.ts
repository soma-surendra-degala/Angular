import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-one-child-two',
  imports: [],
  templateUrl: './parent-one-child-two.html',
  styleUrl: './parent-one-child-two.scss'
})
export class ParentOneChildTwo {
  ngDoCheck() {
    console.log('Parent One Child Two change detection triggered');
  }
  
  onclick() {
  }

}
