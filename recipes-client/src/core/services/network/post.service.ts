/*
 * File        : post.service.ts
 * Description : Post Service. Used for CRUD operations.
 * Author      : Kuts Vladyslav Ivanovich
 */

import { Injectable, signal, inject, WritableSignal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Post } from '../../models/entities/recipes-api/social/post.entity';

import { environment } from '../../../environments/environment.dev';

@Injectable ({ providedIn: 'root' })
export class PostSrvc
{
  private readonly _baseUrl: string = `${environment.apiUrl}/posts`;

  private readonly _httpClient: HttpClient = inject(HttpClient)

  private readonly _posts: WritableSignal<Post[] | undefined> = signal(undefined)

  public get posts(): Signal<Post[] | undefined>
  { return this._posts.asReadonly() }

  // Load all posts
  public loadAll(): void
  {
    this._httpClient.get<Post[]>(this._baseUrl).subscribe
    ({
        next: (posts) => this._posts.set(posts),
    });
  }

  // Create a new post
  createPost(post: Post): Observable<Post>
  { return this._httpClient.post<Post>(this._baseUrl, post); }
  
  // Update existing post
  updatePost(post: Post): Observable<Post>
  { return this._httpClient.put<Post>(this._baseUrl, post); }

  // Delete a post
  deletePost(id: number): Observable<void>
  { return this._httpClient.delete<void>(`${this._baseUrl}/${id}`); }
  
  // Get single post by ID
  getPostById(id: string): Observable<Post>
  { return this._httpClient.get<Post>(`${this._baseUrl}/${id}`); }
}