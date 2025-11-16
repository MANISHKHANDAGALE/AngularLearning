import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp',
  imports: [],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  @Input() count=0
ngOnDestroy(){
  console.log("ngOnDestory Called");
}
ngOnChanges(){
  console.log("ngOnChange Called");
}
}
