import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone:true,
  imports: [FormsModule,Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {

 receivedMessageFromChild: string = ''; 

  parent: string = "";
  

  receiveMessage(message: string): void {
    console.log("Message received from child:", message);
    this.receivedMessageFromChild = message;
  }

}
