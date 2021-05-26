import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  posts: Post[] = [
    {title:"Как выучить Andular?", text: "Практиковаться", id: 1},
    //{title:"Что такое Angular?", text: "Это frontend framework", id: 2}
  ]


  ngOnInit(): void {
    setTimeout(()=>{
      console.log('Timeout')
      this.posts[0] = {
        title: 'Chenged',
        text: 'change2',
        id: 345
      }
    }, 5000)
  }

  onUpdateData(post: Post){
      this.posts.unshift(post)
  }
}
