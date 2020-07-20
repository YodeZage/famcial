import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { KeepingAccountRoutingModule } from './keeping-account-routing.module';
import {
  SpendComponent,
  IncomeComponent,
  TransferComponent,
  LoanComponent
} from './components';

@NgModule({
  declarations: [
    SpendComponent,
    IncomeComponent,
    TransferComponent,
    LoanComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KeepingAccountRoutingModule
  ],
  exports: [
    SpendComponent,
    IncomeComponent,
    TransferComponent,
    LoanComponent
  ]
})
export class KeepingAccountModule { }
