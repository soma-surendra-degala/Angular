import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star-rating',
  standalone:true,
  imports: [CommonModule,NgbRatingModule],
  templateUrl: './star-rating.html',
  styleUrls: ['./star-rating.css']
})
export class StarRating {
    @Input() rating:number = 0;
    @Input() isReadOnly?:boolean = false;
}
