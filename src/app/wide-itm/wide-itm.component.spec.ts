import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideItmComponent } from './wide-itm.component';

describe('WideItmComponent', () => {
  let component: WideItmComponent;
  let fixture: ComponentFixture<WideItmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WideItmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WideItmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
