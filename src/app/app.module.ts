import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VinylListComponent } from './vinyl-list/vinyl-list.component';

import { FormsModule } from '@angular/forms';
import { VinylstoreContactComponent } from './vinylstore-contact/vinylstore-contact.component';
import { VinylstoreGuideComponent } from './vinylstore-guide/vinylstore-guide.component';
import { CartComponent } from './cart/cart.component';
import { VinylstoreVinylsComponent } from './vinylstore-home/vinylstore-home.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { LikeButtonComponent } from './like-button/like-button.component'

@NgModule({
  declarations: [
    AppComponent,
    VinylListComponent,
    VinylstoreContactComponent,
    VinylstoreGuideComponent,
    CartComponent,
    VinylstoreVinylsComponent,
    InputIntegerComponent,
    LikeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [VinylListComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
