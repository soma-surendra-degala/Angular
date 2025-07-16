import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css'
}) 
export class About {
  constructor(private router:Router,private route: ActivatedRoute){}
goToEdit(){
  this.router.navigate(['edit-about'],{ relativeTo: this.route });
}

}
