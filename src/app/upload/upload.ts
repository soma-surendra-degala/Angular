import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-upload',
  imports:[NgbModule,FormsModule,RouterModule],
  templateUrl: './upload.html',
  styleUrls: ['./upload.scss']
})
export class Upload {
  picUrl: string = '';
  imageName: string = '';

  constructor(private router:Router,private storage:AngularFireStorage){}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const ts=Date.now();
    const filepath =`images/${ts}`; 
    const fileRef= this.storage.ref(filepath);
    const task=this.storage.upload(filepath,file);
    task.snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((downloadURL)=>{
          this.picUrl=downloadURL;
          alert('File uploaded successfully');
        })
      })
    ).subscribe();
  }
uploadImage(){}

  home(){
    this.router.navigate(['home'])
  }
  login(){
    this.router.navigate(['login'])
  }
}
