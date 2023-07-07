import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'app-lista-de-compras';
  shoppingList!: Array<Item>;
  itemToBeEdited!: Item;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingList();
    console.log(this.shoppingList);
  }

  //this item variable is being emitting from the child component (<app-item>)
  editItem(item: Item){
    console.log("item emitted: " + JSON.stringify(item));

    //now the parente component (app.comnponent) has a variable with the object
    //to be sent to other child component (InputComponent)
    this.itemToBeEdited = item;

  }
}
