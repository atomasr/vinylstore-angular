import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../like-button/Like';
import { VinylCartService } from '../vinyl-cart.service';
import { Vinyl } from '../vinyl-list/Vinyl';
import { VinylListComponent } from '../vinyl-list/vinyl-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartList$: Observable<Vinyl[]>;
  likesList$: Observable<Like[]>;
  totalPrice$: Observable<number>;
  
  constructor(private cart: VinylCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.likesList$ = cart.likesList.asObservable();
    this.totalPrice$ = cart.totalPrice.asObservable();
  }

  ngOnInit(): void {
  }

}