import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})

export class PostComponent implements OnInit {

  // @ts-ignore
  @Input() item: Item;
  @Output() ondelete: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() onImp: EventEmitter<Item> = new EventEmitter<Item>();
  constructor() { }

  ngOnInit(): void {
  }
  onImportant(){
    this.onImp.emit(this.item);
  }
  // tslint:disable-next-line:typedef
  deleteItem(){
    this.ondelete.emit(this.item);
  }
}
