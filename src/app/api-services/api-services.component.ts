import { Component } from '@angular/core';
import { ProductService } from '../apiservices/product.service';
import { user } from '../../interface/user';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-api-services',
  imports: [FormsModule, NgIf],
  templateUrl: './api-services.component.html',
  styleUrl: './api-services.component.css'
})
export class ApiServicesComponent {
  SelectedPost:undefined|user;
  post:user[]=[];
constructor(private api:ProductService){
}
ngOnInit(){
this.getPost();
}
getPost(){
  this.api.getPost().subscribe((p:user[])=>{
this.post=p
  })
}
addPost(postForm:user){
console.log(postForm);
if(!this.SelectedPost){

  this.api.addPost(postForm).subscribe((p:user)=>{
    if(p){
      this.getPost()
    }
  })
}else{
  console.log("updated form",postForm);
  this.api.updatePost(postForm).subscribe((p)=>{
   if(p){
   this.getPost()
   }
  })
  
}
}
deletepost(id:string){
this.api.deletePost(id).subscribe((p:user)=>{
  if(p){
    this.getPost()
    console.log(p);
    
  }
})
}
updatePostId(id:string){
  this.api.updatePostId(id).subscribe((p)=>{
  console.log(p);
  this.SelectedPost=p
  })
}
}
