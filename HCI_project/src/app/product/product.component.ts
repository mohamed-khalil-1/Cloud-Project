import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  template: '<div>Product Details</div>'
})
export class ProductComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log('Product ID:', params['id']);
    });
  }
} 