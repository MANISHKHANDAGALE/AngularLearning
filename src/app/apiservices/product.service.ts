import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) {
   }
   getPost():Observable<user[]>{
    const url ="http://localhost:3000/posts"
    return this.http.get<user[]>(url)
   }
   addPost(user:user):Observable<user>{
    const url ="http://localhost:3000/posts"
    return this.http.post<user>(url,user)
   }
}
