import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ViewAllComponent,
  EditAccountComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/account/view-all',
    pathMatch: 'full'
  },
  {
    path: 'view-all',
    component: ViewAllComponent
  },
  {
    path: 'edit-account',
    component: EditAccountComponent
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
export class EditAccountRoutingModule { }
