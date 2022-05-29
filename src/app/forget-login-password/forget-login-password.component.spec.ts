import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { ForgetLoginPasswordComponent } from './forget-login-password.component';

describe('ForgetLoginPasswordComponent', () => {
  let component: ForgetLoginPasswordComponent;
  let fixture: ComponentFixture<ForgetLoginPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetLoginPasswordComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetLoginPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
