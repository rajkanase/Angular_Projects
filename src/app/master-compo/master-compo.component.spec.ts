import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCompoComponent } from './master-compo.component';

describe('MasterCompoComponent', () => {
  let component: MasterCompoComponent;
  let fixture: ComponentFixture<MasterCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
