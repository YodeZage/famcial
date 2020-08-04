import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  MemberComponent,
  StoreComponent,
  PurposeComponent,
  CategoryComponent
} from './components';
import {
  CategoryResolver,
  PurposeResolver,
  StoreResolver,
  MemberResolver
} from './resolvers';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/setting/category',
    pathMatch: 'full'
  },
  {
    path: 'member',
    component: MemberComponent,
    resolve: {
      data: MemberResolver
    }
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'purpose',
    component: PurposeComponent,
    resolve: {
      data: PurposeResolver
    }
  },
  {
    path: 'store',
    component: StoreComponent,
    resolve: {
      data: StoreResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CategoryResolver,
    PurposeResolver,
    StoreResolver,
    MemberResolver
  ]
})
export class TransactionSettingRoutingModule { }
