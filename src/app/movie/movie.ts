import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StarRating } from '../feature/star-rating/star-rating';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie',
  imports: [Header,CommonModule,HttpClientModule,StarRating,NgbRatingModule],
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})
export class Movie  implements OnInit{
  type='';
  id=""; 
  url="";
  movies:any;
  movie:any;


  constructor(private route:ActivatedRoute ,private http:HttpClient, private cdRef: ChangeDetectorRef){}


  ngOnInit(): void {
      this.type=this.route.snapshot.params['type'];
      this.id=this.route.snapshot.params['id'];
      if(this.type === 'trending'){
        this.url='assets/data/trending-movies.json';
      }if(this.type === 'theatre'){
        this.url='assets/data/theatre-movies.json';
      }if(this.type === 'popular'){
        this.url='assets/data/popular-movies.json';
      }
      this.getMovie();
  }

  getMovie(){
      this.http.get(this.url).subscribe((movies)=>{
         setTimeout(() => {
        this.movies=movies;
        let index = this.movies.findIndex((movie:{id:String})=>movie.id == this.id);
        if(index > -1 ){
          this.movie = this.movies[index]
           this.cdRef.detectChanges();
        }
      },100);
    });
  }
}
