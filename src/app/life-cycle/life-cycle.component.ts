import { NgIf } from '@angular/common';
import { afterNextRender, afterRender, Component, ViewChild } from '@angular/core';
import { CompComponent } from "../comp/comp.component";
@Component({
  selector: 'app-life-cycle',
  imports: [NgIf, CompComponent],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent {
  @ViewChild('comp') CompComponent:any
  user=""
  count=0;
constructor(){
  console.log("Constructor Called");
  this.user='mani'
  afterRender(()=>{
    console.log("afterRender");
    
  })
  afterNextRender(()=>{
    console.log("afterNextRender");
    
  })
}
ngOnInit(){
  console.log("ngOnInit Called");
  this.user='manish'
}

counter(){
  this.count++;
}
}
