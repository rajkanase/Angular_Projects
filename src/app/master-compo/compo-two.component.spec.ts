import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoTwoComponent } from './compo-two.component';

describe('CompoTwoComponent', () => {
  let component: CompoTwoComponent;
  let fixture: ComponentFixture<CompoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
