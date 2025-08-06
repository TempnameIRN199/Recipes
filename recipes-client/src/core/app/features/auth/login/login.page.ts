/*
 * Files        : login.page.ts, login.page.html
 * Description  : Login page. Gives possibility to authorize using credentials.
 * Author       : Kuts Vladyslav Ivanovich
 */
import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { RouterModule } from '@angular/router';
import { Credentials } from '../../../../utils/credentials.util';

import { UtilsFactory } from '../../../../factories/utils.factory';

import { AuthSrvc } from '../../../../services/network/auth.service';

@Component
({
  selector: 'rcps-login-page',
  templateUrl: 'login.page.html',
  imports:
  [
    CommonModule,
    FormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    RouterModule
  ],
})
/**
 * Handles login logic of the application
*/
export class LoginPage
{
  private readonly _authSrvc: AuthSrvc = inject(AuthSrvc)

  /**
   * Target input model of user credentials
  */
  public readonly data: Credentials = UtilsFactory.createCredentials();

  public onSubmit(): void
  {
    this._authSrvc.login(this.data);
  }
}