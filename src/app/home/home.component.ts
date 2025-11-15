import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
        users=[
        {name:'manish',age:"22",email:"xyz@gmail.com",id:10},
        {name:'mani',age:"21",email:"xyz1@gmail.com",id:11},
        {name:'manya',age:"20",email:"xyz2@gmail.com",id:11},
      ]
  constructor(private router:Router){}
gotoprofile(name:string){
// this.router.navigate(['profile'],{queryParams:{name}})
this.router.navigate(['profile'],{queryParams:{name}})
}
}
