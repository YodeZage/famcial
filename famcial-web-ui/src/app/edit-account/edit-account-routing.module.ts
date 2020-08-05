import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ViewAllComponent,
  NewAccountComponent
} from './components';
import {
  AccountResolver
} from './resolvers/account.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/account/view-all',
    pathMatch: 'full'
  },
  {
    path: 'view-all',
    component: ViewAllComponent,
    resolve: {
      data: AccountResolver
    }
  },
  {
    path: 'new-account',
    component: NewAccountComponent
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
    AccountResolver
  ]
})
export class EditAccountRoutingModule { }
