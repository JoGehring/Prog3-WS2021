import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { itemModel } from "../data-access/itemModel";

@Injectable({providedIn:'root'})

export class PutItemService{
   constructor(private httpClient: HttpClient){}

   putItem(columnId: number, body: itemModel): Observable<itemModel>{
     console.log("columnId:"+columnId+" , body: "+body);
     return this.httpClient.put<itemModel>('http://localhost:8080/api/board/columns/'+columnId+'/items/'+body.id, body);
   }

}
