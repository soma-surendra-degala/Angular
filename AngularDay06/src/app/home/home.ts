import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRating } from '../feature/star-rating/star-rating';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, CommonModule, HttpClientModule,NgbRatingModule,StarRating], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  trendingMovies: any;
  theatreMovies:any;
  popularMovies:any;


  constructor(private http: HttpClient ,private router:Router) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http.get<any[]>('assets/data/trending-movies.json').subscribe({
      next: (movies) => {
        this.trendingMovies = movies;
      },
      error: (err) => {
        console.error("Failed to fetch JSON:", err);
      }
    });
  }
  getTheatreMovies() {
    this.http.get<any[]>('assets/data/theatre-movies.json').subscribe({
      next: (movies) => {
        this.theatreMovies = movies;
      },
      error: (err) => {
        console.error("Failed to fetch JSON:", err);
      }
    });
  }
   getPopularMovies() {
    this.http.get<any[]>('assets/data/popular-movies.json').subscribe({
      next: (movies) => {
        this.popularMovies = movies;
      },
      error: (err) => {
        console.error("Failed to fetch JSON:", err);
      }
    });
}

    goToMovie(type:string,id:string){
      this.router.navigate(['Movie',type,id])
    }
}
