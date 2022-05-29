import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { OtpForUnblockingComponent } from './otp-for-unblocking.component';

describe('OtpForUnblockingComponent', () => {
  let component: OtpForUnblockingComponent;
  let fixture: ComponentFixture<OtpForUnblockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpForUnblockingComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpForUnblockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
