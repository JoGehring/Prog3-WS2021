import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { itemModel } from "src/lib/data-access/itemModel";
import { DeleteItemService } from "src/lib/feature/deleteItem.service";
import { GetItemsService } from "src/lib/feature/getItems.service";
import { PostItemService } from "src/lib/feature/postITem.service";
import { PutColumnService } from "src/lib/feature/putColumn.service";

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})

export class ColumnComponent implements OnInit{

  constructor(private changeColumn: PutColumnService, private deleteItemService: DeleteItemService, private postItemService: PostItemService, private getItems: GetItemsService){}

  ngOnInit(): void {
    this.items = [];
    this.getItems.getColumnItems(this.id).subscribe(data => this.items = data);
  }

  @Input()
  title = '';

  @Input()
  id: number;

  @Input()
  position: number;

  @Input()
  items: itemModel[];

  @Output()
  deleteColumnEvent = new EventEmitter<number>();

  addItem(){
    this.postItemService.postItem(this.id).subscribe(data => this.items.push(data));
  }
  deleteColumn(id: number) {
    this.deleteColumnEvent.emit(id);
    console.log('delete button pressed in Column id: ' + id);
  }

  deleteItem(id: number){
    this.deleteItemService.deleteItem(this.id, id).subscribe();
    this.ngOnInit();
  }

  changeColumnTitle(){

  }

  changeItemTitle(id: number, newTitle: string){
    this.items.find(element => element.id = id).title = newTitle;
  }

 showDeleteButton: boolean = false;
}
