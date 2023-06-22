import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingtrainingComponent } from './upcomingtraining.component';

describe('UpcomingtrainingComponent', () => {
  let component: UpcomingtrainingComponent;
  let fixture: ComponentFixture<UpcomingtrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingtrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
