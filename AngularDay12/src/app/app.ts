import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentOne } from './parent-one/parent-one';
import { ParentTwo } from './parent-two/parent-two';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgbModule,ParentOne, ParentTwo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Angular_Day-12';
  count=2;

  // increment() {
  //   setInterval(()=>{
  //       this.count++;

  //   }, 1000);
  
  // }

  ngDoCheck() {
    console.log('Root component change detection triggered');
  }
  onclick(){}
}
