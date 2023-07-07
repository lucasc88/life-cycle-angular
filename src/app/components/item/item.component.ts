import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item!: Item;
  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  //onChanges run firt than onInit
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");;
  }

  //OnInit run after than OnChanges
  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
