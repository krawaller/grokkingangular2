import {Component} from 'angular2/core';

@Component({
  selector: 'minitest',
  template: `
    <p>
      <input [value]="name" (input)="name = $event.target.value"> <span>Hello {{name}}</span>
    </p>
    <p>
      <input [ngModel]="name2" (ngModelChange)="name2 = $event"> <span>Hello {{name2}}</span>
    </p>
    <p>
      <input [(ngModel)]="name3"> <span>Hello {{name3}}</span>
    </p>
    `,
  directives: []
})
export class MiniTest {
  name: string = 'David'
  name2: string = 'Martin'
  name3: string = 'FooBar'
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/