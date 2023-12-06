import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { FastspringService } from '../fastspring.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
  products: any[] = []; // Define a products array to store product data

  constructor(
    public fastspringService: FastspringService,
    public zone: NgZone
  ) {} // Inject the FastspringService

  ngOnInit(): void {
    this.fastspringService.getProducts().subscribe((products) => {
      this.zone.run(() => {
        this.products = products;
        console.log(this.products);
      });
    });
  }
}
