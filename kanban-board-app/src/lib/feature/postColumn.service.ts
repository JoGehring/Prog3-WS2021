import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ColumnModel } from "../data-access/columnModel";

@Injectable({providedIn:'root'})

export class PostColumnService{
   constructor(private httpClient: HttpClient){}

   //posCounter: number = -1;

   postColumn(): Observable<ColumnModel>{
    //this.posCounter++;
     return this.httpClient.post<ColumnModel>('http://localhost:8080/api/board/columns', {id: Math.floor(Math.random()*1000), name: '', position: Math.floor(Math.random()*1000), items:[]});
   }

}
