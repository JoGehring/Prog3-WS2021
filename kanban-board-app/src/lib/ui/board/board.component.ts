import { Component, Input, OnInit } from "@angular/core";
import { ColumnModel } from "src/lib/data-access/columnModel";
import { DeleteColumnService } from "src/lib/feature/deleteColumn.service";
import { BoardService } from "src/lib/feature/getBoard.service";
import { GetItemsService } from "src/lib/feature/getItems.service";
import { PostColumnService } from "src/lib/feature/postColumn.service";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})

export class BoardComponent implements OnInit{

  constructor(private getBoard: BoardService, private postColumn: PostColumnService, private deleteColumnService: DeleteColumnService, private getItems: GetItemsService){}
  @Input()
  columns: ColumnModel[] = [];

  @Input()
  title = 'Hallo';

  ngOnInit(): void {
    this.getBoard.getBoardTitle().subscribe((data)=>this.title = data);
    this.columns = [];
    this.getBoard.getBoardColumns().subscribe((data: ColumnModel)=>{
      this.getItems.getColumnItems(data.id).subscribe(response => data.items = response);
      this.columns.push(data);
    });
  }

  // showColumns(){
  //   this.columns = [];
  //   this.getBoard.getBoardColumns().subscribe((data: ColumnModel)=>{
  //     this.getItems.getColumnItems(data.id).subscribe(response => data.items = response);
  //     this.columns.push(data);
  //   });
  // }

  addEmptyColumn(){
    this.postColumn.postColumn().subscribe();
    this.ngOnInit();
  }

  deleteColumn(id: number){
    this.deleteColumnService.deleteColumn(id).subscribe();
    //this.postColumn.posCounter--;
    this.ngOnInit();
  }
}


// [
//   {
//   id: 0,
//   name: 'column1',
//   position: 0,
//   items: [
//     {
//       id: 0,
//       title: 'column1_item1',
//       position: 0,
//       timestamp: 'timestamp1'
//     },
//     {
//       id: 1,
//       title: 'column1_item2',
//       position: 1,
//       timestamp: 'timestamp2'
//     }
//   ]
// },

// {
//   id: 1,
//   name: 'column2',
//   position: 1,
//   items: [
//     {
//       id: 3,
//       title: 'column2_item1',
//       position: 0,
//       timestamp: 'timestamp3'
//     },
//     {
//       id: 4,
//       title: 'column2_item2',
//       position: 1,
//       timestamp: 'timestamp2'
//     }
//   ]
// }]
