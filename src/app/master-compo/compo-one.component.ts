import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compo-one',
  template: `
      
    
        <ul class="list-group">
        <li class="list-group-item" (click)="onElectronics()"><a>Electronics</a></li>
        <li class="list-group-item" (click)="onCars()"><a>Cars</a></li>
        <li class="list-group-item" (click)="onBikes()"><a>Bikes</a></li>
        <li class="list-group-item" (click)="onWatches()"><a>Watches</a></li>
        <li class="list-group-item" (click)="onShirts()"><a>Shirt</a></li>
        <li class="list-group-item" (click)="onTshirts()"><a>T-Shirt</a></li>
        <li class="list-group-item" (click)="onSaree()"><a>Saree</a></li>
        <li class="list-group-item" (click)="onLaptop()"><a>Laptop</a></li>
        <li class="list-group-item" (click)="onShoes()"><a>Shoes</a></li>
        <li class="list-group-item" (click)="onShips()"><a>Ships</a></li>
        

        
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

  onElectronics(){
    this.imgEv.emit({
      imgs :[
        'electronics/e1.jpg','electronics/e2.jpg','electronics/e3.jpg','electronics/e4.jpg','electronics/e5.jpg','electronics/e6.jpg','electronics/e7.jpg','electronics/e8.jpg','electronics/e9.jpg','electronics/e10.jpg','electronics/e11.jpg','electronics/e12.jpg','electronics/e13.jpg','electronics/e14.jpg','electronics/e15.jpg'
      ]

    });
  }

  onCars(){
    this.imgEv.emit({
      imgs :[
        'cars/c1.jpg','cars/c2.jpg','cars/c3.jpg','cars/c4.jpg','cars/c5.jpg','cars/c6.jpg','cars/c7.jpg','cars/c8.jpg','cars/c9.jpg','cars/c10.jpg','cars/c11.jpg','cars/c12.jpg','cars/c13.jpg','cars/c14.jpg','cars/c15.jpg'
      ]

    });
  }

  onBikes(){
    this.imgEv.emit({
      imgs :[
        'bikes/b1.jpg','bikes/b2.jpg','bikes/b3.jpg','bikes/b4.jpg','bikes/b5.jpg','bikes/b6.jpg','bikes/b7.jpg','bikes/b8.jpg','bikes/b9.jpg','bikes/b10.jpg','bikes/b11.jpg','bikes/b12.jpg','bikes/b13.jpg','bikes/b14.jpg','bikes/b15.jpg'
      ]

    });
  }

  onWatches(){
    this.imgEv.emit({
      imgs :[
        'watches/w1.jpg','watches/w2.jpg','watches/w3.jpg','watches/w4.jpg','watches/w8.jpg','watches/w6.jpg','watches/w7.jpg','watches/w8.jpg','watches/w9.jpg','watches/w10.jpg','watches/w11.jpg','watches/w12.jpg','watches/w13.jpg','watches/w14.jpg','watches/w15.jpg'
      ]

    });
  }

  onShirts(){
    this.imgEv.emit({
      imgs :[
        'shirts/a1.jpg','shirts/a2.jpg','shirts/a3.jpg','shirts/a4.jpg','shirts/a5.jpg','shirts/a6.jpg','shirts/a7.jpg','shirts/a8.jpg','shirts/a9.jpg','shirts/a10.jpg','shirts/a11.jpg','shirts/a12.jpg','shirts/a13.jpg','shirts/a14.jpg','shirts/a15.jpg'
      ]

    });
  }

  onTshirts(){
    this.imgEv.emit({
      imgs :[
        't shirts/t1.jpg','t shirts/t2.jpg','t shirts/t3.jpg','t shirts/t4.jpg','t shirts/t5.jpg','t shirts/t6.jpg','t shirts/t7.jpg','t shirts/t8.jpg','t shirts/t9.jpg','t shirts/t10.jpg','t shirts/t11.jpg','t shirts/t12.jpg','t shirts/t13.jpg','t shirts/t14.jpg','t shirts/t15.jpg'
      ]

    });
  }

  onSaree(){
    this.imgEv.emit({
      imgs :[
        'saree/d1.jpg','saree/d2.jpg','saree/d3.jpg','saree/d4.jpg','saree/d5.jpg','saree/d6.jpg','saree/d7.jpg','saree/d8.jpg','saree/d9.jpg','saree/d10.jpg','saree/d11.jpg','saree/d12.jpg','saree/d13.jpg','saree/d14.jpg','saree/d15.jpg'
      ]

    });
  }

  onLaptop(){
    this.imgEv.emit({
      imgs :[
        'laptop/l1.jpg','laptop/l2.jpg','laptop/l3.jpg','laptop/l4.jpg','laptop/l5.jpg','laptop/l6.jpg','laptop/l7.jpg','laptop/l8.jpg','laptop/l9.jpg','laptop/l10.jpg','laptop/l11.jpg','laptop/l12.jpg','laptop/l13.jpg','laptop/l14.jpg','laptop/l15.jpg'
      ]

    });
  }

  onShoes(){
    this.imgEv.emit({
      imgs :[
        'shoes/h1.jpg','shoes/h2.jpg','shoes/h3.jpg','shoes/h4.jpg','shoes/h5.jpg','shoes/h6.jpg','shoes/h7.jpg','shoes/h8.jpg','shoes/h9.jpg','shoes/h10.jpg','shoes/h11.jpg','shoes/h12.jpg','shoes/h13.jpg','shoes/h14.jpg','shoes/h15.jpg'
      ]

    });
  }

  onShips(){
    this.imgEv.emit({
      imgs :[
        'ships/s1.jpg','ships/s2.jpg','ships/s3.jpg','ships/s4.jpg','ships/s5.jpg','ships/s6.jpg','ships/s7.jpg','ships/s8.jpg','ships/s9.jpg','ships/s10.jpg','ships/s11.jpg','ships/s12.jpg','ships/s13.jpg','ships/s14.jpg','ships/s15.jpg'
      ]

    });
  }

}
