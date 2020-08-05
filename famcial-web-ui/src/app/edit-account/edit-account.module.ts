import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAccountRoutingModule } from './edit-account-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

import {
  ViewAllComponent,
  NewAccountComponent
} from './components';


@NgModule({
  declarations: [
    ViewAllComponent,
    NewAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditAccountRoutingModule,
    ModalModule.forRoot()
  ],
  exports: [
    ViewAllComponent,
    NewAccountComponent
  ]
})
export class EditAccountModule { }
