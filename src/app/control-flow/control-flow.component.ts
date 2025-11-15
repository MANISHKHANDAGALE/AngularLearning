import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
      myName="";
      name="";
      displayName="";
      show=true;
      color="";
      users=["manish","abc","xyz","123","demo4","demo3","demo2","demo1"];
      students=[
        {nav:'manish',age:"22",email:"xyz@gmail.com"},
        {nav:'mani',age:"21",email:"xyz1@gmail.com"},
        {nav:'manya',age:"20",email:"xyz2@gmail.com"},
      ]
getName(event:Event){
        this.name=(event.target as HTMLInputElement).value;
      }
      setName(){
        this.name="demo"
      }
      display_name(){
        this.displayName=this.name;
      }
      showDiv(){
        this.show=true;
      }
      hide(){
        this.show=false;
      }
      toggle(){
        this.show=!this.show;
      }
      handleColor(val:string){
        this.color=val;
      }
      handleInputColor(event:Event){
       this.color=(event.target as HTMLInputElement).value;
      }
      handlegetName(name:string){
       this.myName=name;
      }
}
