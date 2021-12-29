import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ColumnModel } from "../data-access/columnModel";

@Injectable({providedIn:'root'})

export class PutColumnService{
   constructor(private httpClient: HttpClient){}

   putColumn(column: ColumnModel): Observable<string>{
     return this.httpClient.put<string>('http://localhost:8080/api/board/columns/'+column.id, column);
   }

}
