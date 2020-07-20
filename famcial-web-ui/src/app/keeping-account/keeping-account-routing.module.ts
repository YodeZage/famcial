import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  SpendComponent,
  IncomeComponent,
  TransferComponent,
  LoanComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/record/spend',
    pathMatch: 'full'
  },
  {
    path: 'spend',
    component: SpendComponent
  },
  {
    path: 'income',
    component: IncomeComponent
  },
  {
    path: 'transfer',
    component: TransferComponent
  },
  {
    path: 'loan',
    component: LoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeepingAccountRoutingModule { }
