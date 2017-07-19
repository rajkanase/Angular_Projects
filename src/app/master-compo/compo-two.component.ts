import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compo-two',
  template: `
    <div class=row>
    <div class=col-md-12>
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg"/>
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
