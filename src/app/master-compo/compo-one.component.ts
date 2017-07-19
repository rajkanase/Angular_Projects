import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compo-one',
  template: `
      <br/>
      <div class="container">
      <div class=row>
      <div class=col-md-4>
        <input type="button" class="btn btn-primary" value="first button" (click)="onClick('a.jpg')"><br/><br/>
        <input type="button" class="btn btn-primary" value="second button" (click)="onClick('b.jpg')"><br/><br/>
        <input type="button" class="btn btn-primary" value="third button" (click)="onClick('c.jpg')">
      </div>
      </div>
      </div>
  `,
  styles: []
})
export class CompoOneComponent implements OnInit {

  @Output()
  imgEv:EventEmitter<string>

  constructor() { 
    this.imgEv=new EventEmitter();
  }

  ngOnInit() {
  }

  onClick(imgNm:string){
    this.imgEv.emit(imgNm);
  }

}
