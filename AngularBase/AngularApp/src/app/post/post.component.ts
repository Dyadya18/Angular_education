import {ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  // @ts-ignore
  @Input('Mypost') post: Post;
  // @ts-ignore
  @ContentChild("info", {static: true}) elRef: ElementRef
  constructor() { }

  ngOnInit(){
    console.log(this.elRef.nativeElement)
  }

}
