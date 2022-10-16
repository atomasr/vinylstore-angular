import { Component, OnInit } from '@angular/core';
import { Vinyl } from './Vinyl';

@Component({
  selector: 'app-vinyl-list',
  templateUrl: './vinyl-list.component.html',
  styleUrls: ['./vinyl-list.component.scss']
})
export class VinylListComponent implements OnInit {
  vinyls: Vinyl[] = [
    {
    "img": "assets/img/midnights.jpeg",
    "name": "midnights",
    "genre": "pop",
    "price": 299,
    "stock": 0,
    "bestSeller": true,
    "quantity": 0,
  },
  {
    "img": "assets/img/midnights.jpeg",
    "name": "midnights",
    "genre": "pop",
    "price": 299,
    "stock": 13,
    "bestSeller": false,
    "quantity": 0,
  },
  {
    "img": "assets/img/midnights.jpeg",
    "name": "midnights",
    "genre": "pop",
    "price": 299,
    "stock": 13,
    "bestSeller": false,
    "quantity": 0,
  },
]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(vinyl: Vinyl): void {
    if (vinyl.quantity < vinyl.stock) 
      vinyl.quantity++;
  }
  downQuantity(vinyl: Vinyl): void {
    if (vinyl.quantity > 0) 
    vinyl.quantity--;
  }

  changeQuantity(event, vinyl: Vinyl): void {
    event.target;
  }
}
