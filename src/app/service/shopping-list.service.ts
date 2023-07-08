import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {

  private shoppingList: Item[] = [
    {
      id: 1,
      name: 'Queijo prato',
      date: 'Segunda-feira (31/10/2022) às 08:30',
      bought: false,
    },
    {
      id: 2,
      name: 'Leite integral',
      date: 'Segunda-feira (31/10/2022) às 08:30',
      bought: false,
    },
    {
      id: 3,
      name: 'Mamão papaia',
      date: 'Segunda-feira (31/10/2022) às 08:30',
      bought: true,
    },
  ];

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getShoppingList() {
    return this.shoppingList;
  }

  createItem(itemName: string): Item {
    const id = this.shoppingList.length + 1;
    const item: Item = {
      id: id,
      name: itemName,
      date: new Date().toLocaleString('en-EN'),
      bought: false,
    };
    return item;
  }

  addItem(itemName: string) {
    const item = this.createItem(itemName);
    this.shoppingList.push(item);
  }

  editItemInTheList(oldItem: Item, editedItemName: string) {
    const editedItem: Item = {
      id: oldItem.id,
      name: editedItemName,
      date: oldItem.date,
      bought: oldItem.bought
    }

    const id = oldItem.id;

    //find the item in the list and replace it
    this.shoppingList.splice(Number(id) - 1, 1, editedItem);
  }
}
