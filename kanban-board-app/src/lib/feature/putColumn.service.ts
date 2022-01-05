import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ColumnModel } from "../data-access/columnModel";

@Injectable({providedIn:'root'})

export class PutColumnService{
   constructor(private httpClient: HttpClient){}

   putColumn(body: ColumnModel): Observable<ColumnModel>{
     return this.httpClient.put<ColumnModel>('http://localhost:8080/api/board/columns/'+body.id, body);
   }

}
