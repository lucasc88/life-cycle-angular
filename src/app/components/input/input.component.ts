import { ShoppingListService } from './../../service/shopping-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {

  itemValue!: string;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addItem() {
    console.log('itemValue: ' + this.itemValue);
    this.shoppingListService.addItem(this.itemValue);
    this.clearField();
  }

  clearField(){
    this.itemValue = '';
  }
}
