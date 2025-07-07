  import { CommonModule } from '@angular/common';
  import { HttpClient, HttpClientModule} from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewPipe } from './new-pipe';


  @Component({
    selector: 'app-root',
    standalone:true,
    imports: [NgbModule,CommonModule,HttpClientModule,NewPipe],
    templateUrl: './app.html',
    styleUrls: ['./app.css']
  })
  export class App implements OnInit {
    protected title = 'Angular_Day-05';

    users :any;

    url="https://api.github.com/users"

    constructor(private http: HttpClient){}

    ngOnInit(): void {
        this.getUsers();
    }

  getUsers() {
      this.http.get(this.url).subscribe({
        next: (res) => {
          console.log('success');
          this.users = res;
        },
        error: (err) => {
          console.log('error');
          console.log(err);
        },
        complete: () => {
          console.log('completed');
        }
      });
    }
    goToGithub(url:string){

      window.open(url,"_blank")

    }
    
    amount = 222.34586;
    channelName="SuriDegala";
    mark=0.8564;
    today=new Date;
    name="Surendra Virat"





  }
