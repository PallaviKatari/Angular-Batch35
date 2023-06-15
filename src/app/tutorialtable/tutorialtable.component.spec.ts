import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialtableComponent } from './tutorialtable.component';

describe('TutorialtableComponent', () => {
  let component: TutorialtableComponent;
  let fixture: ComponentFixture<TutorialtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
