import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoginCreatedComponent } from './new-login-created.component';

describe('NewLoginCreatedComponent', () => {
  let component: NewLoginCreatedComponent;
  let fixture: ComponentFixture<NewLoginCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLoginCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoginCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
