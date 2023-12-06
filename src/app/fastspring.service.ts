import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';

// This will let you use fastspring
declare var fastspring: any;

// Declare the fastSpringCallBack function globally
declare function fastSpringCallBack(data: any): void;

// This service adds the FastSpring script to the dom
@Injectable({
  providedIn: 'root',
})
export class FastspringService {
  private data: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private products: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(@Inject(DOCUMENT) private document: Document) {}
  resetCart() {
    fastspring.builder.reset();
  }
  addItem(item: string) {
    fastspring.builder.add(item);
  }
  checkout() {
    fastspring.builder.checkout();
  }
  selectCountry(country: string) {
    // Launch the FastSpring builder with the selected country code
    fastspring.builder.country(country);
  }
  applyCoupon(couponCode: string): void {
    // Check if the coupon code is not empty
    if (couponCode.trim() !== '') {
      // Apply the coupon code using FastSpring API
      if (fastspring && fastspring.builder) {
        fastspring.builder.promo(couponCode);
      } else {
        console.error('FastSpring builder is not available.');
      }
    } else {
      // Handle empty coupon code (you can show an error message if needed)
      console.error('Coupon code is empty.');
    }
  }

  loadScript() {
    // Declare script properties, usual and custom ones are included in ['notation']
    window.fastSpringCallBack = (data: any) => {
      this.data.next(data);
      console.log(data);
      if (data && data.groups) {
        const newProducts: any[] = [];
        data.groups.forEach((group: { items: any[] }) => {
          if (group.items && Array.isArray(group.items)) {
            group.items.forEach((item: any) => {
              newProducts.push(item);
            });
          }
        });
        this.products.next(newProducts);
        console.log(this.products);
      }
    };
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://sbl.onfastspring.com/sbl/0.9.5/fastspring-builder.min.js';
    script.id = 'fsc-api';
    script.setAttribute('data-continuous', 'true');
    script.dataset['storefront'] =
      'assignmentse.test.onfastspring.com/popup-assignmentse';
    script.dataset['dataCallback'] = 'fastSpringCallBack';
    // Append the script to the document's body
    document.getElementsByTagName('body')[0].appendChild(script);
  }

  getData(): Observable<any> {
    return this.data.asObservable();
  }

  getProducts(): Observable<any[]> {
    return this.products.asObservable();
  }
}
