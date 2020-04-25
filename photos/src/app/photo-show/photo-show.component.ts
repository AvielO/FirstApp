import { Component, OnInit } from '@angular/core';
import { GetPhotoService } from '../get-photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string = ''

  constructor(private PhotoService: GetPhotoService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.PhotoService.getRandomPhoto().subscribe((respone) => {
      this.photoUrl = respone.urls.regular;
    })
  }

  ngOnInit(): void {
  }
}
