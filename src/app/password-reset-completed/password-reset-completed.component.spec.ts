import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetCompletedComponent } from './password-reset-completed.component';

describe('PasswordResetCompletedComponent', () => {
  let component: PasswordResetCompletedComponent;
  let fixture: ComponentFixture<PasswordResetCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordResetCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
