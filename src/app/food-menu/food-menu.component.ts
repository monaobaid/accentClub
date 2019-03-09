import { Component, OnInit } from '@angular/core';
import {MenuService} from '../services/menu.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styles: []
})
export class FoodMenuComponent implements OnInit {
subfoodmenu=null
selectTaype:string
foodmenutype=this.foodMenu.foodMenuType

  constructor(private foodMenu:MenuService) { }

  ngOnInit() {
    
  }
  onselect(id)
  {
   
    this.subfoodmenu=this.foodMenu.foodMenu.filter(x=>x.id==id)
    
  }

}
