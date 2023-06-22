import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailComponent } from './coursedetail.component';

describe('CoursedetailComponent', () => {
  let component: CoursedetailComponent;
  let fixture: ComponentFixture<CoursedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
