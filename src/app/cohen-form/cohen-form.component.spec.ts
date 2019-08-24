import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CohenFormComponent } from './cohen-form.component';

describe('CohenFormComponent', () => {
  let component: CohenFormComponent;
  let fixture: ComponentFixture<CohenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CohenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CohenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
