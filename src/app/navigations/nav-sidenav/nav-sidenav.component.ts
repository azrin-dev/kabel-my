import { Component, OnInit } from '@angular/core';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-nav-sidenav',
  templateUrl: './nav-sidenav.component.html',
  styleUrls: ['./nav-sidenav.component.scss']
})
export class NavSidenavComponent implements OnInit{

   pages: string[];

   constructor( ) {}

   ngOnInit() {
      this.pages = routes as string[]; 
   }

}
