import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compo-one',
  template: `
      
      
      
        <!--<input type="button" class="btn btn-primary" value="first button" (click)="onClick('a.jpg')"><br/><br/>
        <input type="button" class="btn btn-primary" value="second button" (click)="onClick('b.jpg')"><br/><br/>
        <input type="button" class="btn btn-primary" value="third button" (click)="onClick('c.jpg')">-->
        <ul class="list-group">
        <li class="list-group-item" (click)="onClick('a.jpg')"><a>Watch</a></li>
        <li class="list-group-item" (click)="onClick('b.jpg')">Cars</li>
        <li class="list-group-item" (click)="onClick('c.jpg')">Bikes</li>
        
        </ul>
    
      
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
