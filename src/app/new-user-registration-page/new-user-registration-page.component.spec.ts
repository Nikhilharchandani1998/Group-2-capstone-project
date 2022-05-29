import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { NewUserRegistrationPageComponent } from './new-user-registration-page.component';

describe('NewUserRegistrationPageComponent', () => {
  let component: NewUserRegistrationPageComponent;
  let fixture: ComponentFixture<NewUserRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserRegistrationPageComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
