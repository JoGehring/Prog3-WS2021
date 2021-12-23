import { Component, EventEmitter, Input, Output } from "@angular/core";
import { itemModel } from "src/lib/data-access/itemModel";

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})

export class ColumnComponent{
  @Input()
  name = "column";

  @Input()
  id: number;

  @Input()
  items: itemModel[];

  @Output()
  deleteColumnEvent = new EventEmitter<number>();

  addItem(){
    this.items.push({
      id:Math.random(),
      title: '',
      position: 0,
      timestamp: ''
    })
  }
  deleteColumn(id: number) {
    this.deleteColumnEvent.emit(id);
    console.log('delete button pressed in Column id: ' + id);
  }

  deleteItem(id: number){
    this.items = this.items.filter(element => element.id != id);
  }

 showDeleteButton: boolean = false;
}
