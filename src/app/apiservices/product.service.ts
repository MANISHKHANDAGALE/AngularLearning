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
   url ="http://localhost:3000/posts"
   getPost():Observable<user[]>{

    return this.http.get<user[]>(this.url)
   }
   addPost(user:user):Observable<user>{
    return this.http.post<user>(this.url,user)
   }
   deletePost(id:string):Observable<user>{
    return this.http.delete<user>(`${this.url}/${id}`)
   }
   updatePostId(id:string):Observable<user>{
    return this.http.get<user>(`${this.url}/${id}`)
   }
   updatePost(user:user):Observable<user>{
    return this.http.put<user>(`${this.url}/${user.id}`,user)
   }
}
