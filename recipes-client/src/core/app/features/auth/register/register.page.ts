/*
 * Files        : register.page.ts, register.page.html
 * Description  : Register page. Gives possibility to register using appropriate data.
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
  selector: 'rcps-register-page',
  templateUrl: 'register.page.html',
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
 * Handles register logic of the application
*/
export class RegisterPage
{
  private readonly _authSrvc: AuthSrvc = inject(AuthSrvc)

  /**
   * Target input model of user credentials
  */
  public readonly data: Credentials = UtilsFactory.createCredentials();

  public onSubmit(): void
  {
    this._authSrvc.register(this.data);
  }
}