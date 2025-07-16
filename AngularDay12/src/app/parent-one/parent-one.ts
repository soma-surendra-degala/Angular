import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentOneChildOne } from '../parent-one-child-one/parent-one-child-one';
import { ParentOneChildTwo } from '../parent-one-child-two/parent-one-child-two';

@Component({
  selector: 'app-parent-one',
  imports: [NgbModule,ParentOneChildOne,ParentOneChildTwo],
  templateUrl: './parent-one.html',
  styleUrl: './parent-one.scss'
})
export class ParentOne {

  ngDocheck() {
    console.log('Parent One change detection triggered');
  }
  onclick() {
  }

}
