import { Component } from '@angular/core';
import { ParentTwoChildOne } from '../parent-two-child-one/parent-two-child-one';
import { ParentTwoChildTwo } from '../parent-two-child-two/parent-two-child-two';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parent-two',
  imports: [ParentTwoChildOne, ParentTwoChildTwo,NgbModule ],
  templateUrl: './parent-two.html',
  styleUrl: './parent-two.scss'
})
export class ParentTwo {

  ngDocheck() {
    console.log('Parent Two change detection triggered');
  }
  onclick() {

  }

}
