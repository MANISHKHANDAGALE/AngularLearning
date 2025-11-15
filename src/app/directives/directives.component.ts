import { NgFor, NgIf, NgSwitch, NgSwitchCase,NgSwitchDefault } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgFor,NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
users=["manish","abc","xyz","123","demo4","demo3","demo2","demo1"];
      students=[
        {nav:'manish',age:"22",email:"xyz@gmail.com"},
        {nav:'mani',age:"21",email:"xyz1@gmail.com"},
        {nav:'manya',age:"20",email:"xyz2@gmail.com"},
      ];
      login=true;
      color='red';
}
