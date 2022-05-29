import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPVerifiedComponent } from './otp-verified.component';

describe('OTPVerifiedComponent', () => {
  let component: OTPVerifiedComponent;
  let fixture: ComponentFixture<OTPVerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTPVerifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OTPVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
