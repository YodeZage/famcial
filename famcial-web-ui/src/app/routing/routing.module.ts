import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeComponent,
  RecordComponent,
  PageNotFoundComponent,
  PageUnderConstructionComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
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
    component: PageUnderConstructionComponent
  },
  {
    path: 'report',
    component: PageUnderConstructionComponent
  },
  {
    path: 'category',
    component: PageUnderConstructionComponent
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
    PageUnderConstructionComponent
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
