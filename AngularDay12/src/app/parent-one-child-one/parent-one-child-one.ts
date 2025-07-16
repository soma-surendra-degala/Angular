import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parent-one-child-one',
  imports: [NgbModule],
  templateUrl: './parent-one-child-one.html',
  styleUrl: './parent-one-child-one.scss'
})
export class ParentOneChildOne {
  ngDoCheck() {
    console.log('Parent One Child One change detection triggered');
  }
  
  onclick() {
  }
}
