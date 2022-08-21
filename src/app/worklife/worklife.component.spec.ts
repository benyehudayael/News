import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklifeComponent } from './worklife.component';

describe('WorklifeComponent', () => {
  let component: WorklifeComponent;
  let fixture: ComponentFixture<WorklifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorklifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorklifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
