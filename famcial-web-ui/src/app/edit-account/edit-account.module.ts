import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAccountRoutingModule } from './edit-account-routing.module';

import {
  ViewAllComponent,
  EditAccountComponent
} from './components';


@NgModule({
  declarations: [
    ViewAllComponent,
    EditAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditAccountRoutingModule
  ],
  exports: [
    ViewAllComponent,
    EditAccountComponent
  ]
})
export class EditAccountModule { }
