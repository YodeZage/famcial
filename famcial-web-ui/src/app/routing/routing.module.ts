import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import {
  HomeComponent,
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
    component: PageUnderConstructionComponent
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
    PageNotFoundComponent,
    PageUnderConstructionComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CoreModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
