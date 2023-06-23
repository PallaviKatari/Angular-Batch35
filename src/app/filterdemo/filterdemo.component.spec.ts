import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdemoComponent } from './filterdemo.component';

describe('FilterdemoComponent', () => {
  let component: FilterdemoComponent;
  let fixture: ComponentFixture<FilterdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
