import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecartitemComponent } from './coursecartitem.component';

describe('CoursecartitemComponent', () => {
  let component: CoursecartitemComponent;
  let fixture: ComponentFixture<CoursecartitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursecartitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecartitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
