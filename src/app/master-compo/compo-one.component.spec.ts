import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoOneComponent } from './compo-one.component';

describe('CompoOneComponent', () => {
  let component: CompoOneComponent;
  let fixture: ComponentFixture<CompoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
