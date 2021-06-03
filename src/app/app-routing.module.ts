import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailabilityCheckDistrictPinComponent } from './availability-check-district-pin/availability-check-district-pin.component';

const routes: Routes = [
  { path: '', redirectTo: 'avl', pathMatch: 'full' },
  { path: 'avl', component: AvailabilityCheckDistrictPinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
