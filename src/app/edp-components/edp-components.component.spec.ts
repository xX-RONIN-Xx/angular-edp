import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpComponentsComponent } from './edp-components.component';

describe('EdpComponentsComponent', () => {
  let component: EdpComponentsComponent;
  let fixture: ComponentFixture<EdpComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdpComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdpComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
