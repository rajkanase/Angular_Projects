// import { by } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compo-two',
  template: `

  
   <div class="row">
   <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    
    </div>
    <br/><br/>
    <div class="row">
   <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    
    </div>

    <br/><br/>
    <div class="row">
   <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    
    </div>

    <br/><br/>
    <div class="row">
   <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm" alt="../assets/a.jpg" width="200px"/>
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
