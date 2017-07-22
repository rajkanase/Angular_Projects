// import { by } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compo-two',
  template: `

  <br><br>
   <div class="row">
   <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[0]" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[1]" alt="../assets/a.jpg" width="200"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[2]" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[3]" alt="../assets/a.jpg" width="200px"/>

    </div>
    </div><br/><br/>

    <div class="row">
   <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[4]" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[5]" alt="../assets/a.jpg" width="200"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[6]" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[7]" alt="../assets/a.jpg" width="200px"/>

    </div>
    </div><br/><br/>

    <div class="row">
   <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[8]" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[9]" alt="../assets/a.jpg" width="200"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[10]" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[11]" alt="../assets/a.jpg" width="200px"/>

    </div>
    </div><br/><br/>

    <div class="row">
   <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[12]" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[13]" alt="../assets/a.jpg" width="200"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[14]" alt="../assets/a.jpg" width="200px"/>
    </div>
    <div class="col-md-3 img-hover">
    <img [src]="'../assets/'+imgNm.imgs[15]" alt="../assets/a.jpg" width="200px"/>

    </div>
    </div>

  `,
  styles: [
    `
    img{
      border : 2px solid black;
    }

.img-hover img {
    -webkit-transition: all .3s ease; /* Safari and Chrome */
  	-moz-transition: all .3s ease; /* Firefox */
  	-o-transition: all .3s ease; /* IE 9 */
  	-ms-transition: all .3s ease; /* Opera */
  	transition: all .3s ease;
}
.img-hover img:hover {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform:translateZ(0) scale(1.20); /* Safari and Chrome */
    -moz-transform:scale(1.20); /* Firefox */
    -ms-transform:scale(1.20); /* IE 9 */
    -o-transform:translatZ(0) scale(1.20); /* Opera */
    transform:translatZ(0) scale(1.20);
}

    `
  ]
})
export class CompoTwoComponent implements OnInit {

@Input()
imgNm:any;

  constructor() { }

  ngOnInit() {
  }

}
