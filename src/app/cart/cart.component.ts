import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../like-button/Like';
import { VinylCartService } from '../vinyl-cart.service';
import { Vinyl } from '../vinyl-list/Vinyl';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartList$: Observable<Vinyl[]>;
  likesList$: Observable<Like[]>;
  
  constructor(private cart: VinylCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.likesList$ = cart.likesList.asObservable();
  }

  ngOnInit(): void {
  }
  
}