import { Component, OnInit } from '@angular/core';
import { VinylCartService } from '../vinyl-cart.service';
import { Vinyl } from './Vinyl';

@Component({
  selector: 'app-vinyl-list',
  templateUrl: './vinyl-list.component.html',
  styleUrls: ['./vinyl-list.component.scss']
})
export class VinylListComponent implements OnInit {
  vinyls: Vinyl[] = [
    {
    "img": "assets/img/midnights.jpg",
    "name": "Midnights",
    "author": "Taylor Swift",
    "genre": "Pop",
    "price": 25.49,
    "stock": 222,
    "bestSeller": true,
    "quantity": 0,
  },
  {
    "img": "assets/img/acdc.jpg",
    "name": "Back in Black",
    "author": "AC/DC",
    "genre": "Hard Rock",
    "price": 22.99,
    "stock": 180,
    "bestSeller": false,
    "quantity": 0,
  },
  {
    "img": "assets/img/25.jpg",
    "name": "25",
    "author": "Adele",
    "genre": "R&B/Soul",
    "price": 46.99,
    "stock": 86,
    "bestSeller": false,
    "quantity": 0,
  },
  {
    "img": "assets/img/abbeyroad.jpg",
    "name": "Abbey Road",
    "author": "The Beatles",
    "genre": "Alternative/Indie",
    "price": 39.43,
    "stock": 38,
    "bestSeller": false,
    "quantity": 0,
  },
  {
    "img": "assets/img/am.jpg",
    "name": "AM",
    "author": "Artic Monkeys",
    "genre": "Alternative/Indie",
    "price": 17.79,
    "stock": 72,
    "bestSeller": false,
    "quantity": 0,
  },
  {
    "img": "assets/img/legend.jpg",
    "name": "Legend",
    "author": "Bob Marley",
    "genre": "Reggae",
    "price": 22.23,
    "stock": 77,
    "bestSeller": false,
    "quantity": 0,
  },
  {
    "img": "assets/img/harry.jpg",
    "name": "Harry's House",
    "author": "Harry Styles",
    "genre": "Funk/Synth pop",
    "price": 29.99,
    "stock": 81,
    "bestSeller": true,
    "quantity": 0,
  },
  {
    "img": "assets/img/darkside.jpg",
    "name": "Dark Side of the Moon",
    "author": "Pink Floyd",
    "genre": "Classic Rock",
    "price": 25.32,
    "stock": 18,
    "bestSeller": false,
    "quantity": 0,
  },
  {
    "img": "assets/img/hozier.jpg",
    "name": "Hozier",
    "author": "Hozier",
    "genre": "Alternative/Indie",
    "price": 16.79,
    "stock": 30,
    "bestSeller": false,
    "quantity": 0,
  },
  {
    "img": "assets/img/red.jpg",
    "name": "Red (Taylor's Version)",
    "author": "Taylor Swift",
    "genre": "Country/Pop",
    "price": 40.96,
    "stock": 88,
    "bestSeller": true,
    "quantity": 0,
  },
]

  constructor(private cart: VinylCartService) {
   }

  ngOnInit(): void {
  }

  addToCart(vinyl): void {
    if (vinyl.stock >= vinyl.quantity) {
      this.cart.addToCart(vinyl);
      vinyl.stock -= vinyl.quantity;
    }
    vinyl.quantity = 0;
  }

  maxReached(m: number) {
    alert(m)
  }
}
