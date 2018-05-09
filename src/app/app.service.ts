import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getPosts() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }



}
