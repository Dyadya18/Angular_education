import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  inputValue = 'example';
  // backgroundValue = false;
  number = 1;
  arr: number[] = [1, 3, 5, 7, 9, 11, 13, 15];
  objets = [
    {name: 'Vlad',
      surname: 'Ocheretnyi',
      cars: [{marka: 'mersedes', model: 'cls', nomer: 4352},
        {marka: 'bmw', model: '540', nomer: 7777}
      ]
    },
    {name: 'Vasya', surname: 'Pupkin', cars: [
        {marka: 'VAZ', model: '2121', nomer: 6969}
      ]}
  ];
}

