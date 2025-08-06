/*
 * Files        : comment.item.ts, comment.item.html
 * Description  : Comment item. Provides comment and appropriate functions.
 * Author       : Kuts Vladyslav Ivanovich
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { GeneralSrvc } from '../../../services/general.service';

import { Comment } from '../../../models/entities/recipes-api/social/comment.entity';

@Component
({
  selector: 'rcps-comment-item',
  templateUrl: 'comment.item.html',
  imports:
  [
    CommonModule,
    
    MatCardModule,
    MatIconModule
  ],
})
export class CommentItem
{
  @Input() public comment: Comment | undefined;

  @Output() public like = new EventEmitter<Comment>();
  @Output() public dislike = new EventEmitter<Comment>();
  @Output() public report = new EventEmitter<void>();

  public onLike(): void
  { this.like.emit(); }

  public onDislike(): void
  { this.dislike.emit(); }

  public onReport(): void
  { this.report.emit(); }

  public formatDate(timestamp: number): string
  { return GeneralSrvc.formatDate(this.comment?.createdAt ?? 0); }
}