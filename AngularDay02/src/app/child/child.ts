import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Output() sendMessage = new EventEmitter();

  @Input()
  child="";

  toParent(e:Event){
    const inputValue =(e.target as HTMLInputElement).value
    this.sendMessage.emit(inputValue);
  }

}
