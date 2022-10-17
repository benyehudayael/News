import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLIDESHOWComponent } from './slide-show.component';

describe('SLIDESHOWComponent', () => {
  let component: SLIDESHOWComponent;
  let fixture: ComponentFixture<SLIDESHOWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SLIDESHOWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SLIDESHOWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
