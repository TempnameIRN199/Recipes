import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';

import { CommentSrvc } from '../services/network/comment.service';
import { DishSrvc } from '../services/network/dish.service';
import { PostSrvc } from '../services/network/post.service';
import { AuthSrvc } from '../services/network/auth.service';

export const appConfig: ApplicationConfig =
{
  providers:
  [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    
    CommentSrvc,
    DishSrvc,
    PostSrvc,
    AuthSrvc
  ]
};
