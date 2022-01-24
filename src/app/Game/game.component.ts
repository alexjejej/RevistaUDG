import { Component, OnInit } from '@angular/core'
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'

let contador = 0;

@Component({
  selector: 'Game',
  templateUrl: './game.component.html',
  
  
})


export class GameComponent implements OnInit {
  constructor() {
  
    // Use the component constructor to inject providers.
  }
  
  tap (){
    contador = contador + 1;
    if (contador==1){
      alert("Primera vez que presiona el logo");
    }else{
      
    alert("Has presionado el logo "+contador+" veces");
  }
}

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}










