import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantDetailComponent } from './quant-detail.component';

describe('QuantDetailComponent', () => {
  let component: QuantDetailComponent;
  let fixture: ComponentFixture<QuantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
