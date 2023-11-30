import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
