/*
 * Files        : dish.item.ts, dish.item.html
 * Description  : Dish item component. Provides dish and appropriate functions.
 * Author       : Kuts Vladyslav Ivanovich
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Dish } from '../../../models/entities/recipes-api/business/dish.entity';

@Component
({
  selector: 'rcps-dish-item',
  templateUrl: 'dish.item.html',
  imports:
  [
    CommonModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DishItem
{
  @Input() public dish: Dish | undefined;

  @Output() public edit = new EventEmitter<void>();
  @Output() public delete = new EventEmitter<void>();

  public onEdit(): void
  { this.edit.emit(); }

  public onDelete(): void
  { this.delete.emit(); }
}