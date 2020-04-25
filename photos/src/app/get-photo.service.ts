import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetPhotoService {
  constructor(private http: HttpClient) { }

  getRandomPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID ZxwHESM_uLRe0k_ilE6YmQEiRo3UhnlOuM07IIGhVLI'
      }
    })
  }
}
