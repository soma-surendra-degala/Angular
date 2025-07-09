import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  templateUrl: './observable-demo.html',
  styleUrls: ['./observable-demo.css']
})
export class ObservableDemo implements OnInit {
  status = 'Checking...';

  ngOnInit(): void {
    this.getStatus().subscribe((res: string) => {
      this.status = res;
    });
  }

  getStatus(): Observable<string> {
    return new Observable<string>((observer) => {
      setTimeout(() => {
        observer.next('✅ Online (from Observable)');
        observer.complete();
      }, 2000);
    });
  }
}
