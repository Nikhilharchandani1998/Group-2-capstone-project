import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLoginPageComponent } from './main-login-page/main-login-page.component';
import { IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxCheckboxModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { NewUserRegistrationPageComponent } from './new-user-registration-page/new-user-registration-page.component';
import { ForgetLoginPasswordComponent } from './forget-login-password/forget-login-password.component';
import { NewLoginCreatedComponent } from './new-login-created/new-login-created.component';
import { UnBlockTheAccountOfCustomerComponent } from './un-block-the-account-of-customer/un-block-the-account-of-customer.component';
import { OtpForUnblockingComponent } from './otp-for-unblocking/otp-for-unblocking.component';
import { OTPVerifiedComponent } from './otp-verified/otp-verified.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PasswordUpdatedSucessfullyComponent } from './password-updated-sucessfully/password-updated-sucessfully.component';
import { PasswordResetCompletedComponent } from './password-reset-completed/password-reset-completed.component';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLoginPageComponent,
    UserLoginPageComponent,
    NewUserRegistrationPageComponent,
    ForgetLoginPasswordComponent,
    NewLoginCreatedComponent,
    UnBlockTheAccountOfCustomerComponent,
    OtpForUnblockingComponent,
    OTPVerifiedComponent,
    ChangePasswordComponent,
    PasswordUpdatedSucessfullyComponent,
    PasswordResetCompletedComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxInputGroupModule,
    IgxCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
