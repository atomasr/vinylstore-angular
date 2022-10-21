import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VinylCartService } from '../vinyl-cart.service';

import { Like } from '../like-button/Like';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {

  constructor(private likes: VinylCartService) { 
  }

  @Input()
  img!: string;

  @Input()
  name!: string;

  @Input()
  src: string = 'assets/img/heart-regular.svg';

  @Output()
  srcChange: EventEmitter<string> = new EventEmitter<string>();
  
  ngOnInit(): void {
  }


  likeVinyl():void {
    if (this.src == 'assets/img/heart-regular.svg') {
      this.src = 'assets/img/heart-solid.svg';
      this.srcChange.emit(this.src);
      this.addToLikes();
  } else {
      this.src = 'assets/img/heart-regular.svg';
      this.srcChange.emit(this.src);
      this.removeFromLikes();
    }
  }

  addToLikes(): void {
    const vinyl: Like = { img: this.img, name: this.name };
    this.likes.addToLikes(vinyl);
  }

  removeFromLikes(): void {
    const vinyl: Like = { img: this.img, name: this.name };
    this.likes.removeFromLikes(vinyl);
  }
        
}
