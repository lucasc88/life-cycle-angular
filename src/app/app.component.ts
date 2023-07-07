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

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingList();
    console.log(this.shoppingList);
  }
}
