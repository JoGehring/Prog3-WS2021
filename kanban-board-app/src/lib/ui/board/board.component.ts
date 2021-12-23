import { Component, Input } from "@angular/core";
import { ColumnModel } from "src/lib/data-access/columnModel";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})

export class BoardComponent{
  @Input()
  title = 'board';

  columns: ColumnModel[] = [
    {
    id: 0,
    name: 'column1',
    position: 0,
    items: [
      {
        id: 0,
        title: 'column1_item1',
        position: 0,
        timestamp: 'timestamp1'
      },
      {
        id: 1,
        title: 'column1_item2',
        position: 1,
        timestamp: 'timestamp2'
      }
    ]
  },

  {
    id: 1,
    name: 'column2',
    position: 1,
    items: [
      {
        id: 3,
        title: 'column2_item1',
        position: 0,
        timestamp: 'timestamp3'
      },
      {
        id: 4,
        title: 'column2_item2',
        position: 1,
        timestamp: 'timestamp2'
      }
    ]
  }]

  addEmptyColumn(){
    this.columns.push({
      id: Math.random(),
      name: '',
      position: 0,
      items:[]
    })
  }
  deleteColumn(id: number){
    this.columns = this.columns.filter(element => element.id != id);
  }
}
