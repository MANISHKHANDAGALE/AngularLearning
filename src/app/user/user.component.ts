import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userName:string|null = ""
  id:string|null="";
constructor(private route:ActivatedRoute){}
ngOnInit(){
  this.userName = this.route.snapshot.paramMap.get('name')
  this.id = this.route.snapshot.paramMap.get('id')
}
}
