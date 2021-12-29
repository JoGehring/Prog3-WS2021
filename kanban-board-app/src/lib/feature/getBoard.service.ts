import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ColumnModel } from "../data-access/columnModel";
import { GetItemsService } from "./getItems.service";

@Injectable({providedIn:'root'})

export class BoardService{
   constructor(private httpClient: HttpClient, private getItems: GetItemsService){}

   boardTitle = new Subject<string>();
   boardColumns: Subject<ColumnModel>;

  getBoardTitle(): Subject<string> {
    this.httpClient.get('http://localhost:8080/api/board').subscribe((response: any) => this.boardTitle.next(response.title));
    return this.boardTitle;
  }
  getBoardColumns(): Subject<ColumnModel> {
    this.boardColumns = new Subject<ColumnModel>()
    this.httpClient.get('http://localhost:8080/api/board/columns').subscribe((response:JSON)=>{
      for(let i in response){
          var newColumn: ColumnModel = {id: response[i].id, name: response[i].title, position: response[i].position, items:[]};
          this.boardColumns.next(newColumn);
        }
    })
    return this.boardColumns;
  }
}
