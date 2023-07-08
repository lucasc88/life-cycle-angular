import { Item } from 'src/app/interfaces/iItem';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ShoppingListService } from './../../service/shopping-list.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemToBeEdited!: Item;
  editing = false;
  textBtn = 'Save Item';

  itemValue!: string;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['itemToBeEdited'].currentValue);

    //if the value is different, itemValue will receive another value
    if (!changes['itemToBeEdited'].firstChange) {
      this.editing = true;
      this.textBtn = 'Edit Item';
      this.itemValue = this.itemToBeEdited?.name; //? to avoid read a possible null obj
    }
  }

  addItem() {
    console.log('itemValue: ' + this.itemValue);
    this.shoppingListService.addItem(this.itemValue);
    this.clearField();
  }

  clearField() {
    this.itemValue = '';
  }

  editItem(){
    this.shoppingListService.editItemInTheList(this.itemToBeEdited, this.itemValue);
    this.clearField();
    this.editing = false;
    this.textBtn = 'Save Item';
  }
}
