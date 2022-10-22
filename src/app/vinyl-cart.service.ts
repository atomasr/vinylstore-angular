import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Like } from './like-button/Like';
import { Vinyl } from './vinyl-list/Vinyl';

@Injectable({
  providedIn: 'root'
})

/**maneja logica del carrito**/
export class VinylCartService {

  private _cartList: Vinyl[] = [];
  private _likesList: Like[] = [];
  private _totalPrice: number = 0;

  cartList: BehaviorSubject<Vinyl[]> = new BehaviorSubject(this._cartList);
  likesList: BehaviorSubject<Like[]> = new BehaviorSubject(this._likesList);
  totalPrice: BehaviorSubject<number> = new BehaviorSubject(this._totalPrice);
  
  constructor() { }
  
  addToCart(vinyl: Vinyl):void {
    let item = this._cartList.find((v1) => v1.name == vinyl.name)
    if (!item) {
      this._cartList.push({...vinyl});
    } else {
      item.quantity += vinyl.quantity;
    }
    this.cartList.next(this._cartList);
  }

  removeFromCart(vinyl: Vinyl):void {
    let item = this._cartList.find((v1) => v1.name == vinyl.name)
    const index = this._cartList.indexOf(item!);
    if (index > -1) { // only splice array when item is found
      this._cartList.splice(index, 1); // 2nd parameter means remove one item only
      this.updateVinylList();
    }
    this.cartList.next(this._cartList);
  }

  updateVinylList():void {

  }

  updateTotalPrice():void {
    let totalPrice = 0;
    for (let index = 0; index < this._cartList.length; index++) {
      const itemPrice = this._cartList[index].price * this._cartList[index].quantity ;
      totalPrice += itemPrice;
    }
    this._totalPrice = totalPrice;
    this.totalPrice.next(this._totalPrice);
  }

  cleanCart():void {
    while (this._cartList.length > 0) {
      this._cartList.pop();
    }
  }

  addToLikes(vinyl: Like):void {
    let item = this._likesList.find((v1) => v1.name == vinyl.name)
    if (!item) {
      this._likesList.push({...vinyl});
    } 
    this.likesList.next(this._likesList);
  }

  removeFromLikes(vinyl: Like):void {
    let item = this._likesList.find((v1) => v1.name == vinyl.name)
    const index = this._likesList.indexOf(item!);
    if (index > -1) { // only splice array when item is found
      this._likesList.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.likesList.next(this._likesList);
  }

}
