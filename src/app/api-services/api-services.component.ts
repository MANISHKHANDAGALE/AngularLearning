import { Component } from '@angular/core';
import { ProductService } from '../apiservices/product.service';
import { user } from '../../interface/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-services',
  imports: [FormsModule],
  templateUrl: './api-services.component.html',
  styleUrl: './api-services.component.css'
})
export class ApiServicesComponent {
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
this.api.addPost(postForm).subscribe((p:user)=>{
  if(p){
    this.getPost()
  }
})
}
}
