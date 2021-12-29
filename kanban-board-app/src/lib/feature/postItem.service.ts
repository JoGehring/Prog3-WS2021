import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { itemModel } from "../data-access/itemModel";

@Injectable({providedIn:'root'})

export class PostItemService{
   constructor(private httpClient: HttpClient){}

   //posCounter: number = -1;

   postItem(columnid: number): Observable<itemModel>{
    //this.posCounter++;
     return this.httpClient.post<itemModel>('http://localhost:8080/api/board/columns/'+columnid+'/items', {id: Math.floor(Math.random()*1000), title: '', position: Math.floor(Math.random()*1000), timestamp: ''});
   }

}
