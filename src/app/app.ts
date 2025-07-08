import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from './feature/feature-module';

@Component({
  selector: 'app-root',
  imports: [NgbModalModule,RouterOutlet,FormsModule,FeatureModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular_Day-06';
}
