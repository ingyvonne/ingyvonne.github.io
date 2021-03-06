import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'movie/:id', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)},
  { path: 'tv-show/:id', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)},
  { path: '**', loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
