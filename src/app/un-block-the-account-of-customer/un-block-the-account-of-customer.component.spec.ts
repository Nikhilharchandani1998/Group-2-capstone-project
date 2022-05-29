import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { UnBlockTheAccountOfCustomerComponent } from './un-block-the-account-of-customer.component';

describe('UnBlockTheAccountOfCustomerComponent', () => {
  let component: UnBlockTheAccountOfCustomerComponent;
  let fixture: ComponentFixture<UnBlockTheAccountOfCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnBlockTheAccountOfCustomerComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnBlockTheAccountOfCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
