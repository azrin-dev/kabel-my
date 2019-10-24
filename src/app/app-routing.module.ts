import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
   // Public Route
   { path: '', component: HomeComponent, data: { name: 'Home', icon: 'home', tooltip: 'Home Page', type: 'public' } },

   // Wildcard routes
  { path: '**', component: HomeComponent, data: { name: 'Back to Home', icon: 'dashboard', type: 'wildcard' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
