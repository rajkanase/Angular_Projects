// import { by } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compo-two',
  template: `

  
   
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="50%"/>
    
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
