import { Component } from '@angular/core';
// import Renderer2 for accessing element from the DOM

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // isFavorite: boolean = false;

  // courseGoals: Array<Object> = [
  //   { title: 'Master Angular Styling', isActiveGoal: true },
  //   { title: 'Understand Angular Animations', isActiveGoal: false },
  //   { title: 'Master Angular Animations', isActiveGoal: false }
  // ];

  constructor(
    // private renderer: Renderer2
  ) { }

  // showQuote(element: HTMLElement) {
  //   // console.log(element);
  //   this.renderer.setStyle(element, 'display', 'block');
  // }
}
