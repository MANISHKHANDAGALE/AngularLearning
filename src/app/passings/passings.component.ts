import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passings',
  imports: [],
  templateUrl: './passings.component.html',
  styleUrl: './passings.component.css'
})
export class PassingsComponent {
username:string|null=""
//  <!-- data passed using routerLink -->
constructor(private route:ActivatedRoute){
}
ngOnInit(){
   this.route.queryParamMap.subscribe(param=>{
   this.username = param.get('name')
  })
}
//  <!-- data passed using btn click -->
// constructor(private route:ActivatedRoute){}
// ngOnInit(){
//   this.route.queryParams.subscribe(param=>{
//     this.username=param['name']
//   })
// }

}
