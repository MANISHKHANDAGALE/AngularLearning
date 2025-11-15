import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-passing',
  imports: [RouterLink],
  templateUrl: './passing.component.html',
  styleUrl: './passing.component.css'
})
export class PassingComponent {
  constructor(private router:Router){}
data(name:string){
this.router.navigate(['passings'],{queryParams:{name}})
}
}
