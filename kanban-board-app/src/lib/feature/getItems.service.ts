import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { itemModel } from "../data-access/itemModel";

@Injectable({providedIn:'root'})

export class GetItemsService{
   constructor(private httpClient: HttpClient){}

   columnItems: Subject<itemModel[]>;

  getColumnItems(id: number): Subject<itemModel[]> {
    this.columnItems = new Subject<itemModel[]>();
    var items: itemModel[] = [];
    this.httpClient.get('http://localhost:8080/api/board/columns/'+id+'/items').subscribe((response:JSON)=>{
      for(let i in response){
          var newItem: itemModel = {id: response[i].id, title: response[i].title, position: response[i].position, timestamp: response[i].timestamp};
          items.push(newItem);
        }
    })
    this.columnItems.next(items);
    return this.columnItems;
  }
}
