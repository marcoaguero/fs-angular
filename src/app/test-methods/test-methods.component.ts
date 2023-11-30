import { Component } from '@angular/core';
import { FastspringService } from '../fastspring.service';

@Component({
  selector: 'app-test-methods',
  standalone: true,
  imports: [],
  templateUrl: './test-methods.component.html',
})
export class TestMethodsComponent {
  constructor(public fastspringService: FastspringService) {}
}
