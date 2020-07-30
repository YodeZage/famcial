import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  MemberComponent,
  StoreComponent,
  PurposeComponent,
  CategoryComponent
} from './components';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/setting/category',
    pathMatch: 'full'
  },
  {
    path: 'member',
    component: MemberComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'purpose',
    component: PurposeComponent
  },
  {
    path: 'store',
    component: StoreComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionSettingRoutingModule { }
