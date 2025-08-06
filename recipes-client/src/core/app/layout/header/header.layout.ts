/*
 * Files        : header.layout.ts, header.layout.html
 * Description  : Header. Basic header with links.
 * Author       : Kuts Vladyslav Ivanovich
 */

import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule } from '@angular/router';

@Component
({
  selector: 'rcps-header-layout',
  templateUrl: 'header.layout.html',
  imports:
  [
    RouterModule,
    MatIconModule
  ]
})
export class HeaderLayout
{
  // header-layout.component.ts
  @Output() public menuClick: EventEmitter<void> = new EventEmitter<void>();

  public onMenuClick(): void
  { this.menuClick.emit(); } 
}