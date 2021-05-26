import { Component } from '@angular/core';

export interface Item{
  title: string;
  important: boolean;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isVisible = false;
  ItemList: Item[] = [
    {title: 'Drink coffe', done: false, important: false},
    {title: 'Make awesome App', done: false, important: true }
  ];

  onAdd(item: Item){
    this.ItemList.unshift(item);
  }

  onDelete(item: Item){
    this.ItemList.splice(this.ItemList.indexOf(item), 1);
  }

  onImportant(item: Item){
    this.ItemList[this.ItemList.indexOf(item)].important = !item.important ;
  }
}
