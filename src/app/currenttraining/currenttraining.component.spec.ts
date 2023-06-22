import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenttrainingComponent } from './currenttraining.component';

describe('CurrenttrainingComponent', () => {
  let component: CurrenttrainingComponent;
  let fixture: ComponentFixture<CurrenttrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenttrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenttrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
