import { Component } from '@angular/core';
import { VinylCartService } from './vinyl-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vinyl Store';

  constructor(private cart: VinylCartService) {
  }

  cleanCart(): void {
      this.cart.cleanCart();
  }
}
