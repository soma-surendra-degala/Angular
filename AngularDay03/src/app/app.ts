import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Home } from './home/home';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [NgbModule,FormsModule,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//   protected title = 'Angular_Day-03';

//   @ViewChild ('myinput',{static : false})  inputRef!: ElementRef<HTMLInputElement>;

//  ngAfterViewInit(): void {
//   setTimeout(() => {
//     if (this.inputRef?.nativeElement) {
//       this.inputRef.nativeElement.focus(); 
//     }},10);
//    }
   
//    clicked(input:HTMLInputElement,channelname:HTMLParagraphElement){
//      console.log('Input value:', input.value);
// console.log('Channel text:', channelname.innerText);
//  }
}
