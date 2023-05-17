import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  constructor(private dataService: DataService) {
    console.log('hello from second');

    setInterval(() => {
      this.dataService.setName(`${Math.random()}`);
    }, 1000);
  }
}
