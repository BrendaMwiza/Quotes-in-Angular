import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CohenDetailsComponent } from './cohen-details.component';

describe('CohenDetailsComponent', () => {
  let component: CohenDetailsComponent;
  let fixture: ComponentFixture<CohenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CohenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CohenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
