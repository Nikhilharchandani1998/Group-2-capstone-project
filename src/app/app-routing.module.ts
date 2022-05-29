import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MainLoginPageComponent } from './main-login-page/main-login-page.component';
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

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'main-login-page', component: MainLoginPageComponent, data: { text: 'Main login page' } },
  { path: 'user-login-page', component: UserLoginPageComponent, data: { text: 'User login page' } },
  { path: 'new-user-registration-page', component: NewUserRegistrationPageComponent, data: { text: 'New user registration page' } },
  { path: 'forget-login-password', component: ForgetLoginPasswordComponent, data: { text: 'Forget Login Password' } },
  { path: 'new-login-created', component: NewLoginCreatedComponent, data: { text: 'New login created' } },
  { path: 'un-block-the-account-of-customer', component: UnBlockTheAccountOfCustomerComponent, data: { text: 'Un block the account of customer' } },
  { path: 'otp-for-unblocking', component: OtpForUnblockingComponent, data: { text: 'Otp for unblocking' } },
  { path: 'otp-verified', component: OTPVerifiedComponent, data: { text: 'OTP verified' } },
  { path: 'change-password', component: ChangePasswordComponent, data: { text: 'Change password' } },
  { path: 'password-updated-sucessfully', component: PasswordUpdatedSucessfullyComponent, data: { text: 'Password updated sucessfully' } },
  { path: 'password-reset-completed', component: PasswordResetCompletedComponent, data: { text: 'Password reset completed' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
