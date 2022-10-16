import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinyl-list',
  templateUrl: './vinyl-list.component.html',
  styleUrls: ['./vinyl-list.component.scss']
})
export class VinylListComponent implements OnInit {
  vinyl = {
    "img": "assets/img/midnights.jpeg",
    "nombre": "midnights",
    "genero": "pop",
    "precio": "299",
    "stock": 13
  }
  constructor() { }

  ngOnInit(): void {
  }

}
