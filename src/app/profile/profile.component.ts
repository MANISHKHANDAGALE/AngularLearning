import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
 userName:string|null=""
 constructor( private route:ActivatedRoute){
}
ngOnInit(){
  // method 1
  // this.userName=this.route.snapshot.paramMap.get('name');
  //  method 2
  // this.route.queryParams.subscribe(params=>{
  //   this.userName=params['name']
  // method 3
  this.route.data.subscribe(data=>{
    this.userName=data['name']
  })  
  
}
}
