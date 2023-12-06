import { Component, Input } from '@angular/core';
import { FastspringService } from '../fastspring.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() path?: string;
  @Input() image?: string;
  @Input() display?: string;
  @Input() price?: string;
  constructor(public fastspringService: FastspringService) {}
}
