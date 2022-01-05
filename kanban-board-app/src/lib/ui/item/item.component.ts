import { Component, EventEmitter, Input, Output } from "@angular/core";
import { itemModel } from "src/lib/data-access/itemModel";
import { PutItemService } from "src/lib/feature/putItem.service";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent{

  constructor(private putItem: PutItemService){}

  @Input()
  title = "item";

  @Input()
  id: number;

  @Input()
  position: number;

  @Input()
  timestamp: string;

  @Output()
  deleteItemEvent = new EventEmitter<number>();

  @Output()
  changeItemTitleEvent = new EventEmitter<itemModel>();

  deleteItem(id: number){
    this.deleteItemEvent.emit(id);
  }

  changeTitle(){
    this.changeItemTitleEvent.emit({id: this.id, title:this.title, position: this.position, timestamp: this.timestamp});
  }

  showDeleteButton: boolean = false;
}
