import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent{
  @Input()
  title = "item";

  @Input()
  id = 'item';

  @Output()
  deleteItemEvent = new EventEmitter<number>();

  deleteItem(id: number){
    this.deleteItemEvent.emit(id);
  }

  showDeleteButton: boolean = false;
}
