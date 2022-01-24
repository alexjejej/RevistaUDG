import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { NoticiasService } from "../domain/noticias.service"

let count=0;
@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
  //providers: [NoticiasService],

})
export class SearchComponent implements OnInit {
  
  constructor(public noticias: NoticiasService) {
   
  }

  ngOnInit(): void {
    this.noticias.agregar("Primer mensaje");
    this.noticias.agregar("Segundo mensaje");
    this.noticias.agregar("Tercer mensaje");
    count = count + 1;
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
