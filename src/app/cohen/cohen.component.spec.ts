import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CohenComponent } from './cohen.component';

describe('CohenComponent', () => {
  let component: CohenComponent;
  let fixture: ComponentFixture<CohenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CohenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CohenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
