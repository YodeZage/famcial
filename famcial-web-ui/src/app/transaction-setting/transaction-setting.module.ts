import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionSettingRoutingModule } from './transaction-setting-routing.module';

import {
  MemberComponent,
  StoreComponent,
  PurposeComponent,
  CategoryComponent
} from './components';


@NgModule({
  declarations: [
    MemberComponent,
    StoreComponent,
    PurposeComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TransactionSettingRoutingModule
  ],
  exports: [
    MemberComponent,
    StoreComponent,
    PurposeComponent,
    CategoryComponent
  ]
})
export class TransactionSettingModule { }
