import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestMethodsComponent } from './test-methods/test-methods.component';
import { GridComponent } from './grid/grid.component';
import { FastspringService } from './fastspring.service';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    TestMethodsComponent,
    GridComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public fastspringService: FastspringService
  ) {}
  ngOnInit(): void {
    this.fastspringService.loadScript();
  }
}
