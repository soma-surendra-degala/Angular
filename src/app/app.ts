import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,NgbModule,CommonModule,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  firstName =  "Surendra";
  
  image="https://im.rediff.com/cricket/2022/sep/08vk.gif"
  defvalue="Suri"

  code=""
  isBtnDisabled = false;

  checkForm(){
    if(this.code==="Surendra"){
      this.isBtnDisabled=true;
    }

 }


  isApproved= false;

  words : string[]=[
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
  ]
luckyNumber = 0;

  approve(status:boolean){
    this.isApproved=status;
  }

  isHighlightColor ="White";
  highlight(color:string){
  this.isHighlightColor=color

  }

  isToggleStyle:boolean=false;

  toggleStyle(){
    this.isToggleStyle=!this.isToggleStyle;

  }
 isClearDisabled = true;
  chosenNum = 1;
numbers : number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
  

divisibleby(divisibleBy: number) {
    this.chosenNum = divisibleBy;
    if (divisibleBy === 1) {
      this.isClearDisabled = true;
    } else {
      this.isClearDisabled = false;
    }
  }
    




}

