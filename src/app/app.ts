import { Component } from '@angular/core';
import { MyComponent } from './my-component/my-component';
import { MainBody } from './main-body/main-body';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyComponent,MainBody,Footer],
templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-first-project';
}
