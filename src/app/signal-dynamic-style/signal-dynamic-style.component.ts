import { Component,computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-dynamic-style',
  imports: [FormsModule],
  templateUrl: './signal-dynamic-style.component.html',
  styleUrl: './signal-dynamic-style.component.css'
})
export class SignalDynamicStyleComponent {
      users=["manish","abc","xyz","123","demo4","demo3","demo2","demo1"];
      bgColor="red";
      headingSizeBig="80px"
      headingSizeSmall="40px"
      zoom=false
      x=10;
      count = signal(20);
      data:WritableSignal<number | string> = signal(10);
      a=signal(10);
      b=signal(20);
      c:Signal<number> = computed(()=>this.a()+this.b())
      displaysignal=false;
      dbz="";
      
      increase(){
        this.x+=1;
        this.count.set(this.count()+1);
      }
      constructor(){
        effect(()=>{
          console.log(this.x)
          console.log(this.count())
          if(this.a()==20){
            this.displaysignal=true;
            setTimeout(()=>{
              this.displaysignal=false;
            },2000)
          }
          else{
            this.displaysignal=false;
          }
        })
      }
      changeFontSize(){
        this.zoom=!this.zoom;
      }
}
