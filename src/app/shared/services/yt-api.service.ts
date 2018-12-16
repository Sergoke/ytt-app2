import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YtApiService {

  private url = "https://www.googleapis.com/youtube/v3/videos";
  private key = "AIzaSyBLVlx_YeT_1BFQOyBmFzg9HZsf7a8UuL4";

  constructor() { }
}
