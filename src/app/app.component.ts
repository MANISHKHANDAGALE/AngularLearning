import { Component } from '@angular/core';
import { PracticeComponent } from './practice/practice.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DirectivesComponent } from './directives/directives.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  count=0;
 ngOnDestroy() {
    console.log("ngOnDestroy Called");
  }
counter(){
  this.count++;
}
}
