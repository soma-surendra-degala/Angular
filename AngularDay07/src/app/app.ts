import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    number=24;
    // onClicked=false;

    // onClick(){
    //     this.onClicked=true;
    // }
}
