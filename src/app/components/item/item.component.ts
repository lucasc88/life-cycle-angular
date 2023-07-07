import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item!: Item;

  //this will be emitting an item to the parent component
  @Output() emittingItemToEdit: EventEmitter<Item> = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  //onChanges run firt than onInit.
  //What differs OnInit from OnChanges is that OnInit is
  //called only once during the lifetime of the component/directive,
  //whereas OnChanges is called whenever there is a change
  //in data entry properties.
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");;
  }

  //OnInit run after than OnChanges
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  editItem(){
    this.emittingItemToEdit.emit(this.item);
  }
}
