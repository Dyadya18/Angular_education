import { Component } from '@angular/core';
import {interval, Observable, Subject, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  numb = 0;
  sub: Subscription;
  stream$: Subject<number> = new Subject<number>();
  constructor() {
    this.sub = this.stream$.subscribe(value => this.write(value));

    // const streamInterval = interval(3000)
    //   .pipe(
    //     map( (value) => this.numb + value)
    //   );
    //
    // this.sub = streamInterval.subscribe(() => console.log('it is crazy', this.numb));

    // const stream$ = new Observable(subscriber => {
    //   setTimeout(() => subscriber.next([1,4,2,233,4,35,35]), 500);
    //   setTimeout(() => subscriber.error('Errror'), 3000);
    //   setTimeout(() => subscriber.complete(), 4500);
    // });
    // // @ts-ignore
    // this.sub = stream$.subscribe(
    //   value => console.log(value),
    //   error => console.log(error),
    //   () => console.log('Mission complete')
    // );
  }


  stop(){
    this.sub.unsubscribe();
  }
  write(v: any){
    console.log(v);
  }
  i = 0
  next(){
    this.stream$.next(this.i++);
  }
}
