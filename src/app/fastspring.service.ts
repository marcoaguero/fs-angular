import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// This will let you use fastspring
declare var fastspring: any;

// Declare the fastSpringCallBack function globally
declare function fastSpringCallBack(data: any): void;

// This service adds the FastSpring script to the dom
@Injectable({
  providedIn: 'root',
})
export class FastspringService {
  private data: any;
  private products: any[] = [];
  constructor(@Inject(DOCUMENT) private document: Document) {}
  resetCart() {
    fastspring.builder.reset();
  }
  checkout() {
    fastspring.builder.checkout();
  }
  addItem(item: string) {
    fastspring.builder.add(item);
  }
  selectCountry(country: string) {
    // Update the dropdown button's text with the selected country
    // document.getElementById("countryDropdown").textContent = country;

    // Launch the FastSpring builder with the selected country code
    fastspring.builder.country(country);
  }

  loadScript() {
    // Declare script properties, usual and custom ones are included in ['notation']
    window.fastSpringCallBack = (data: any) => {
      this.data = data;
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
        this.products = newProducts;
        console.log(this.products);
      }
    };
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://sbl.onfastspring.com/sbl/0.9.5/fastspring-builder.min.js';
    script.id = 'fsc-api';
    script.dataset['storefront'] =
      'assignmentse.test.onfastspring.com/popup-assignmentse';
    script.dataset['dataCallback'] = 'fastSpringCallBack';
    // Append the script to the document's body
    document.getElementsByTagName('body')[0].appendChild(script);
  }

  getData(): any {
    return this.data;
  }

  getProducts(): any[] {
    return this.products;
  }
}
