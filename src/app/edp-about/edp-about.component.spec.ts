import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpAboutComponent } from './edp-about.component';

describe('EdpAboutComponent', () => {
  let component: EdpAboutComponent;
  let fixture: ComponentFixture<EdpAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdpAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdpAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
