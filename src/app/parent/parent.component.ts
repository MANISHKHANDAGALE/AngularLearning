import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
user:any='default'
users = [
  { id: 1, name: "Anil" },
  { id: 2, name: "Sunil" },
  { id: 3, name: "Raj" },
  {id:4,name:"mohan"}
];


onChange(val:string){
  this.user=val;
}
username:string[] | undefined;
handleUser(val:string[]){
console.log(val);
this.username=val;
}
}
