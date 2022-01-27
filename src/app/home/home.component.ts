import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { EventData } from '@nativescript/core'
import { Application } from '@nativescript/core';


let platform;
@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  
  
})
export class HomeComponent implements OnInit {
  constructor() {

  }
  

  ngOnInit(): void {

  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}

