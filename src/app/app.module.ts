import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Module 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
// Component
import { HomeComponent } from './home/home.component';
import { MenuSidenavComponent } from './menu/menu-sidenav/menu-sidenav.component';


@NgModule({

   declarations: [
      AppComponent,
      HomeComponent,
      MenuSidenavComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule 
   ],
   providers: [],
   bootstrap: [AppComponent]

})
export class AppModule { }
