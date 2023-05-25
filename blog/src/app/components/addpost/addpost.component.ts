import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';  

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
})
export class AddPostComponent {
  constructor(private dataService: DataService) { }

  onSubmit(data: any) {
    this.dataService.createPost(data).subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);

      }
    );
  }
}