/*
 * Files        : sidebar.layout.ts, sidebar.layout.html
 * Description  : Sidebar. Sidebar is the main menu for user.
 * Author       : Kuts Vladyslav Ivanovich
 */

import { Component, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { RouterModule } from '@angular/router';

import { UtilsFactory } from '../../../factories/utils.factory';

import { MenuItem } from '../../../utils/menu-item.util';

@Component
({
  selector: 'rcps-sidebar-layout',
  imports:
  [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  templateUrl: 'sidebar.layout.html'
})
export class SidebarLayout
{
  public menuItems = signal<MenuItem[]>
  ([
      UtilsFactory.createMenuItem('Home', 'home', '/home'),

      UtilsFactory.createMenuItem('Auth', 'person', undefined,
      [
        UtilsFactory.createMenuItem('Login', 'login', '/login'),
        UtilsFactory.createMenuItem('Register', 'person_add', '/register'),
      ]),

      UtilsFactory.createMenuItem('Dishes', 'restaurant', undefined,
      [
        UtilsFactory.createMenuItem('All Dishes', 'list', '/dishes'),
        UtilsFactory.createMenuItem('Create Dish', 'add_circle', '/dishes/create'),
      ]),

      UtilsFactory.createMenuItem('Posts', 'article', undefined,
      [
        UtilsFactory.createMenuItem('All Posts', 'view_list', '/posts'),
        UtilsFactory.createMenuItem('New Post', 'post_add', '/posts/new'),
      ]),
      
      UtilsFactory.createMenuItem('Settings', 'settings', '/settings')
  ]);
}