import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactjsComponent } from './reactjs.component';

describe('ReactjsComponent', () => {
  let component: ReactjsComponent;
  let fixture: ComponentFixture<ReactjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
