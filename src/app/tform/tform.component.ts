import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-tform',
  imports: [FormsModule,NgIf,],
  templateUrl: './tform.component.html',
  styleUrl: './tform.component.css'
})
export class TformComponent {
  userDetail:any;
addDetails(val:NgForm){
console.log(val)
}
}
