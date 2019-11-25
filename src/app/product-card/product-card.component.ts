import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('product') product: Product;
  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product) {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      this.cartService.create().then(result => {
        localStorage.setItem('cartId', result.key);

        // Add product to cart
      });
    } else {
        // Add product to cart
    }
  }
}
