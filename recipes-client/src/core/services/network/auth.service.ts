/*
 * File        : auth.service.ts
 * Description : Authorization Main Service
 * Author      : Kuts Vladyslav Ivanovich
 */

import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';

import { Credentials } from '../../utils/credentials.util';
import { AuthResponse } from '../../utils/auth-response.util';

import { environment } from '../../../environments/environment.dev';

@Injectable({ providedIn: 'root' })
export class AuthSrvc
{
  private readonly _baseUrl: string = `${environment.apiUrl}/auth`;

  private readonly _httpClient: HttpClient = inject(HttpClient)

  public login(credentials: Credentials): Observable<AuthResponse>
  {
    return this._httpClient.post<AuthResponse>(`${environment.apiUrl}/auth/login`, credentials).pipe
    (
      tap((res) =>
      {
          localStorage.setItem('token', res.token);
      })
    );
  }

  public register(credentials: Credentials): Observable<AuthResponse>
  {
    return this._httpClient.post<AuthResponse>(`${environment.apiUrl}/auth/register`, credentials).pipe
    (
      tap((res) =>
        {
            localStorage.setItem('token', res.token);
        })
    );
  }

  public logout(): void
  {
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean
  {
    return localStorage.getItem('token') != '';
  }
}