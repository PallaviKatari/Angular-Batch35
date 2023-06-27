import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineedetailsComponent } from './traineedetails.component';

describe('TraineedetailsComponent', () => {
  let component: TraineedetailsComponent;
  let fixture: ComponentFixture<TraineedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
