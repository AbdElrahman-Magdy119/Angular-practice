import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  childMessage = 'hello from parent'; // data to pass to child

  pipeData = new Date();

  onClick(e: MouseEvent) {
    console.log(e);
  }
  onInput(el: HTMLInputElement) {
    console.log(el);
  }

  // child event listener
  recieveData(data: string) {
    console.log('data recieved:', data);
  }
}
