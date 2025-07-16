import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Toastr } from '../toastr';

@Component({
  selector: 'app-first',
  imports: [Header],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First {

  constructor(private toastr:Toastr) {}

  showToast() {
    this.toastr.showToast();
  }

}
