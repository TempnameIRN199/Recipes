/*
 * Files        : post.item.ts, post.item.html
 * Description  : Post item. Provides post and appropriate functions.
 * Author       : Kuts Vladyslav Ivanovich
 */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post } from '../../../models/entities/recipes-api/social/post.entity';

@Component
({
  selector: 'rcps-post-item',
  templateUrl: 'post.item.html',
  imports:
  [
    CommonModule
  ],
})
export class PostCardItem
{
  @Input() public post: Post | undefined;
}