import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Module 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
// Component
import { HomeComponent } from './home/home.component';
import { NavSidenavComponent } from './navigations/nav-sidenav/nav-sidenav.component';


@NgModule({

   declarations: [
      AppComponent,
      HomeComponent,
      NavSidenavComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      // Material 
      MatListModule,
      MatSidenavModule
   ],
   providers: [],
   bootstrap: [AppComponent]

})
export class AppModule { }
