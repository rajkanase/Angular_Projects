import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compo-one',
  template: `
      
    
        <ul class="list-group">
        <li class="list-group-item" (click)="onClick()"><a>Watch</a></li>
        <li class="list-group-item" (click)="onClick()"><a>Cars</a></li>
        <li class="list-group-item" (click)="onClick()"><a>Bikes<></li>
        
        
        </ul>
    
      
  `,
  styles: []
})
export class CompoOneComponent implements OnInit {

  @Output()
  imgEv:EventEmitter<any>

  constructor() { 
    this.imgEv=new EventEmitter();
  }

  ngOnInit() {
  }

  onClick(){
    this.imgEv.emit({
      imgs :[
        'a.jpg','b.jpg','c.jpg'
      ]

    });
  }

}
