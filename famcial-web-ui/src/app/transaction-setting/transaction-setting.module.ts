import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionSettingRoutingModule } from './transaction-setting-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';

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
    TransactionSettingRoutingModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    MemberComponent,
    StoreComponent,
    PurposeComponent,
    CategoryComponent
  ],
  providers: []
})
export class TransactionSettingModule { }
