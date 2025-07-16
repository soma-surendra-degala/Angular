import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  standalone: true,
  templateUrl: './promise-demo.html',
  styleUrls: ['./promise-demo.css']
})
export class PromiseDemo implements OnInit {
  status = 'Checking...';

  ngOnInit(): void {
    this.getStatus().then((res: string) => {
      this.status = res;
    });
  }

  getStatus(): Promise<string> {
    return new Promise((resolve: (value: string) => void) => {
      setTimeout(() => {
        resolve('✅ Online (from Promise)');
      }, 2000);
    });
  }
}
