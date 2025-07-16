import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-cycles-hooks',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './life-cycles-hooks.html',
  styleUrl: './life-cycles-hooks.css'
})
export class LifeCyclesHooks implements OnInit,OnDestroy,OnChanges {
  interval: any;
  isRunning: boolean = true;
  counter=0;

  nameoftheHooks: string = "This is Angular OnInit";
  name: string = "This is Surendra";

  constructor() {
    console.log("constructor",this.name);
  }

  ngOnInit(): void {
    console.log("ngOnInit",this.nameoftheHooks);
    // this.interval = setInterval(() => {
    //   console.log(this.counter++);
    // }, 1000);
  }

    stopCounter(): void {
    // if (this.interval) {
    //   clearInterval(this.interval);
    //   this.interval = null;
    //   this.isRunning = false;
    //   console.log('🧹 Counter manually stopped');
    //}
  }
   ngOnDestroy(): void {
      //  clearInterval(this.interval);
      console.log('Destory is called');  
  }

  change=""
  ngOnChanges(changes: SimpleChanges): void {
      console.log('Chages is called')
  }
}
