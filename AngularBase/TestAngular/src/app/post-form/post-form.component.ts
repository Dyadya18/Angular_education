import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Item} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.less']
})
export class PostFormComponent implements OnInit {

  // @ts-ignore
  @Output() onAddItem: EventEmitter<Item> = new EventEmitter<Item>();
  title = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    const item: Item = {
      title: this.title,
      important: false,
      done: false
    };
    this.onAddItem.emit(item);
    this.title = '';
  }
}
