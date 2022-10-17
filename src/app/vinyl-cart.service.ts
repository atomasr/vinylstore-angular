import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vinyl } from './vinyl-list/Vinyl';

@Injectable({
  providedIn: 'root'
})

/**maneja logica del carrito**/
export class VinylCartService {

  private _cartList: Vinyl[] = [];
  cartList: BehaviorSubject<Vinyl[]> = new BehaviorSubject(this._cartList);
  
  constructor() { }
  
  addToCart(vinyl: Vinyl) {
    let item = this._cartList.find((v1) => v1.name == vinyl.name)
    if (!item) {
      this._cartList.push({...vinyl});
    } else {
      item.quantity += vinyl.quantity;
    }
    this.cartList.next(this._cartList);
  }

}
