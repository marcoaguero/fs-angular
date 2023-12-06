import { Component, OnInit } from '@angular/core';
import { FastspringService } from '../fastspring.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-methods',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test-methods.component.html',
})
export class TestMethodsComponent implements OnInit {
  couponCode = '';
  data: any = {};
  constructor(public fastspringService: FastspringService) {}
  ngOnInit(): void {
    this.fastspringService.getData().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
}
