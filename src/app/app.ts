import { Component } from '@angular/core';
import { Child } from './child/child';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomValidator } from './custom.validator';
// import { Navbar } from './navbar/navbar';
// import { Categories } from './categories/categories';
// import { Offers } from './offers/offers';

@Component({
  selector: 'app-root',
  // imports: [Navbar,Categories, Offers],
  // imports: [ Child ],
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular_Day-11';
   myForm!: FormGroup;
  comments: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      comment: ['', [CustomValidator]]
    });
  }

  addComments() {
    if (this.myForm.valid) {
      this.comments.push(this.myForm.controls['comment'].value);
      this.myForm.reset();
    }
  }
}
