﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-shell/list/list.module').then(module => module.ListModule)
  },
  {
    path: 'blank',
    loadChildren: () => import('./app-shell/blank/blank.module').then(module => module.BlankModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

