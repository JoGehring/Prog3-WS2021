import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { itemModel } from "../data-access/itemModel";

@Injectable({providedIn:'root'})

export class DeleteItemService{
   constructor(private httpClient: HttpClient){}


   deleteItem(columnId: number, itemId: number): Observable<itemModel>{
     return this.httpClient.delete<itemModel>('http://localhost:8080/api/board/columns/'+columnId+'/items/'+itemId);
   }

}
