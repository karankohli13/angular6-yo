import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://temp.griffex.co/v1/verify/user/exist',
    {
      headers: {'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiY2Q5M2Q5YTEtMmY3Zi00NzU3LTg3NzMtZDAwNzhhNjAxNTM3IiwiaWF0IjoxNTM1NzMzMjQ1LCJleHAiOjE1NjcyNjkyNDV9.KJod0M2QXHgHRYfvuuSganZXhT158KbVCkYP_T0aL3A'}
   }   )
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

}
