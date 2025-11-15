import { Component, EventEmitter, Input, Output } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() user:string='';
@Input() age:any='';
@Input() users:any;
username = ["anil", "sunil", "raj", "mohan"];
@Output() getUser = new EventEmitter()
LoadData(){
  this.getUser.emit(this.username)
}
}
