import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestMethodsComponent } from './test-methods/test-methods.component';
import { FastspringService } from './fastspring.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestMethodsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    public fastspringService: FastspringService
  ) {}
  ngOnInit(): void {
    this.fastspringService.loadScript();
  }
}
