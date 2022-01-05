import { Component, Input, OnInit } from "@angular/core";
import { ColumnModel } from "src/lib/data-access/columnModel";
import { DeleteColumnService } from "src/lib/feature/deleteColumn.service";
import { BoardService } from "src/lib/feature/getBoard.service";
import { PostColumnService } from "src/lib/feature/postColumn.service";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})

export class BoardComponent implements OnInit{

  constructor(private getBoard: BoardService, private postColumn: PostColumnService, private deleteColumnService: DeleteColumnService){}
  @Input()
  columns: ColumnModel[] = [];

  @Input()
  title = 'Hallo';

  ngOnInit(): void {
    this.getBoard.getBoardTitle().subscribe((data)=>this.title = data);
    this.showColumns();
  }

  showColumns(){
    this.columns = [];
    this.getBoard.getBoardColumns().subscribe((data: ColumnModel)=>{
      this.columns.push(data);
    });
  }

  addEmptyColumn(){
    this.postColumn.postColumn().subscribe();
    this.showColumns();
  }

  deleteColumn(id: number){
    this.deleteColumnService.deleteColumn(id).subscribe();
    this.showColumns();
  }
  deleteItem(){
    this.showColumns();
  }
}
