import { Component } from '@angular/core';
import { FastspringService } from '../fastspring.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-methods',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test-methods.component.html',
})
export class TestMethodsComponent {
  couponCode = '';
  constructor(public fastspringService: FastspringService) {}
}
