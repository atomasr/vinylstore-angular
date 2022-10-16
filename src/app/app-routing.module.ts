import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinylstoreContactComponent } from './vinylstore-contact/vinylstore-contact.component';
import { VinylstoreGuideComponent } from './vinylstore-guide/vinylstore-guide.component';
import { VinylstoreVinylsComponent } from './vinylstore-vinyls/vinylstore-vinyls.component';

const routes: Routes = [
  {path: '', redirectTo: 'vinyls', pathMatch: 'full'},
  {path: 'vinyls', component: VinylstoreVinylsComponent},
  {path: 'contact', component: VinylstoreContactComponent},
  {path: 'guide', component: VinylstoreGuideComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
