import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactnativeComponent } from './reactnative.component';

describe('ReactnativeComponent', () => {
  let component: ReactnativeComponent;
  let fixture: ComponentFixture<ReactnativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactnativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactnativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
