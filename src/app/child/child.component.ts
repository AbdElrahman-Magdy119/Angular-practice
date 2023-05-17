import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // providers: [DataService],
})
export class ChildComponent {
  @Input('message') msg!: string; // data comes from parent will be saved here
  @Output() sendData = new EventEmitter<string>(); // event emmiter is used to emit events to parent

  data = '';
  // dependency injection
  constructor(private dataService: DataService) {}

  getData() {
    this.data = this.dataService.getData();
  }

  onClick() {
    this.sendData.emit('hello from child'); // emitting event to parent
  }
}
