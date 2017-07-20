// import { by } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compo-two',
  template: `

  
   <div class="row">
   <div class="col-md-3">
    <img [src]="'../assets/'+imgNm.imgs[0]" alt="../assets/a.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm.imgs[1]" alt="../assets/a.jpg" width="200"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm.imgs[2]" alt="../assets/a.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm.imgs[3]" alt="../assets/a.jpg" width="200px"/>
    </div>

  `,
  styles: []
})
export class CompoTwoComponent implements OnInit {

@Input()
imgNm:any;

  constructor() { }

  ngOnInit() {
  }

}
