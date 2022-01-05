import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { itemModel } from "src/lib/data-access/itemModel";
import { DeleteItemService } from "src/lib/feature/deleteItem.service";
import { PostItemService } from "src/lib/feature/postITem.service";
import { PutColumnService } from "src/lib/feature/putColumn.service";
import { PutItemService } from "src/lib/feature/putItem.service";

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})

export class ColumnComponent implements OnInit {

  constructor(
    private changeColumn: PutColumnService,
    private deleteItemService: DeleteItemService,
    private postItemService: PostItemService,
    private putColumn: PutColumnService,
    private putItem: PutItemService
    ){}

    ngOnInit(): void {
    // throw new Error("Method not implemented.");
    console.log(this.items);
  }


  @Input()
  id: number;

  @Input()
  name: string = 'new Column';

  @Input()
  position: number;

  @Input()
  items: itemModel[];

  @Output()
  deleteColumnEvent = new EventEmitter<number>();

  @Output()
  deleteItemEvent = new EventEmitter<number>();

  addItem(){
    this.postItemService.postItem(this.id).subscribe(data => this.items.push(data));
  }
  deleteColumn(id: number) {
    this.deleteColumnEvent.emit(id);
  }

  deleteItem(itemId: number){
    this.deleteItemService.deleteItem(this.id, itemId).subscribe();
    this.deleteItemEvent.emit(itemId);
  }

  changeColumnTitle(){
    this.putColumn.putColumn({id: this.id, name: this.name, position: this.position, items: this.items}).subscribe((response) => console.log(response));
  }

  changeItemTitle(item: itemModel){
    this.putItem.putItem(this.id, item).subscribe((response)=> console.log(response));
  }

 showDeleteButton: boolean = false;
}
