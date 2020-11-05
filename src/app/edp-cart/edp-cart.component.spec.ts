import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpCartComponent } from './edp-cart.component';

describe('EdpCartComponent', () => {
  let component: EdpCartComponent;
  let fixture: ComponentFixture<EdpCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdpCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdpCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
