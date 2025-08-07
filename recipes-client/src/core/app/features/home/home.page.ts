/*
 * Files        : home.page.ts, home.page.html
 * Description  : Home page. Main page of the application.
 * Author       : Kuts Vladyslav Ivanovich
 */

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostCardItem } from '../../shared/post-card/post.item';

import { PostSrvc } from '../../../services/network/post.service';

@Component
({
  selector: 'rcps-home-page',
  templateUrl: 'home.page.html',
  imports:
  [
    CommonModule,

    PostCardItem
  ],
})
export class HomePage implements OnInit
{
  public readonly postSrvc: PostSrvc = inject(PostSrvc)

  public ngOnInit(): void
  {
    this.postSrvc.loadAll();

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  /*
  public async loadPosts(): void
  {
    if (!this.hasMore())
      return;

    this.loading.set(true);
    const nextPage = this.page();
    const newPosts = await this.postService.loadPosts();

    if (newPosts.length === 0)
    {
      this.hasMore.set(false);
    }
    else
    {
      this.posts.update(p => [...p, ...newPosts]);
      this.page.update(p => p + 1);
    }

    this.loading.set(false);
  }
  */

  public onScroll(): void
  {
    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

    if (nearBottom)
    {
      this.postSrvc.loadAll();
    }
  }
}