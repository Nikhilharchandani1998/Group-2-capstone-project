import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { PasswordUpdatedSucessfullyComponent } from './password-updated-sucessfully.component';

describe('PasswordUpdatedSucessfullyComponent', () => {
  let component: PasswordUpdatedSucessfullyComponent;
  let fixture: ComponentFixture<PasswordUpdatedSucessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordUpdatedSucessfullyComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordUpdatedSucessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
