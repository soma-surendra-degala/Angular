import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { Toastr } from './toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgbModule,RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Angular_Day-09';

  users = [  
    { id: 1, name: 'Harry' },
    { id: 2, name: 'Suri' },
    { id: 3, name: 'Ron' },
    { id: 4, name: 'Virat' },
    { id: 5, name: 'Rolando' },
  ];

  refresh() {
    this.users = [
      { id: 1, name: 'Virat' },
      { id: 2, name: 'Suri' },
      { id: 3, name: 'Cr7' },
      { id: 4, name: 'VK18' },
      { id: 6, name: 'Don' },
    ];
  }

  trackByUserId(index: number, user: any): number {
    return user.id;
  }

  constructor(private toastr:Toastr) {}

  showToast = false;

  
ngOnInit() {
  this.toastr.status$.subscribe((msg: string | null) => {
    this.showToast = !!msg;
  });
}

  closeToast() {
      this.toastr.hideToast();
  }



  

}

