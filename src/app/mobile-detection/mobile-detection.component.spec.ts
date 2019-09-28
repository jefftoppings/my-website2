import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDetectionComponent } from './mobile-detection.component';

describe('MobileDetectionComponent', () => {
  let component: MobileDetectionComponent;
  let fixture: ComponentFixture<MobileDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
