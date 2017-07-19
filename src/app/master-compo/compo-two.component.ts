// import { by } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compo-two',
  template: `

    <div class="container">
    <div class=row>
    <div class=col-sm-12>
   
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="50%"/>
    </div>
    </div>
    </div>
  `,
  styles: []
})
export class CompoTwoComponent implements OnInit {

@Input()
imgNm:string;

  constructor() { }

  ngOnInit() {
  }

}
