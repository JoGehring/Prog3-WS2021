import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ColumnModel } from "../data-access/columnModel";

@Injectable({providedIn:'root'})

export class DeleteColumnService{
   constructor(private httpClient: HttpClient){}


   deleteColumn(id: number): Observable<ColumnModel>{
     return this.httpClient.delete<ColumnModel>('http://localhost:8080/api/board/columns/'+id);
   }

}
