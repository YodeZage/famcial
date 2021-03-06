import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '@famcial/core/core.module';
import { SharedModule } from '@famcial/shared/shared.module';
import {
  HomeComponent,
  RecordComponent,
  PageNotFoundComponent,
  PageUnderConstructionComponent,
  AccountComponent,
  ReportComponent,
  SettingComponent,
  AuthComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'record',
    component: RecordComponent,
    loadChildren: () => import('../keeping-account/keeping-account.module').then(m => m.KeepingAccountModule)
  },
  {
    path: 'account',
    component: AccountComponent,
    loadChildren: () => import('../edit-account/edit-account.module').then(m => m.EditAccountModule)
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'setting',
    component: SettingComponent,
    loadChildren: () => import('../transaction-setting/transaction-setting.module').then(m => m.TransactionSettingModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    RecordComponent,
    PageNotFoundComponent,
    PageUnderConstructionComponent,
    AccountComponent,
    ReportComponent,
    SettingComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
