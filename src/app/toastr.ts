import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Toastr {
  private status = new BehaviorSubject<string | null>(null);

  constructor() {}

  // ✅ This getter exposes the observable for the component
  public get status$(): Observable<string | null> {
    return this.status.asObservable();
  }

  showToast(msg: string = 'Default Toast Message') {
    this.status.next(msg);
  }

  hideToast() {
    this.status.next(null);
  }
}
