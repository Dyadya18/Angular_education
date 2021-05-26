import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.less']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  // @ts-ignore
  @ViewChild('ElementTitle') elem: ElementRef
  title = "";
  text = "";

  constructor() { }

  ngOnInit(): void {
  }

  onFocusTitle(){
    this.elem.nativeElement.focus();
  }
  addPost(){
    if(this.title.trim() && this.text.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      this.text =""
      this.title =""
    }
  }

}
