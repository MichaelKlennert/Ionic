import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'coverpage',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'book1',
    loadChildren: () => import('./book1/book1.module').then(m => m.ListPageModule)
  },
  { path: 'coverpage', loadChildren: './coverpage/coverpage.module#CoverpagePageModule' },
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' },
  { path: 'chapter1', loadChildren: './chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'chapter2', loadChildren: './chapter2/chapter2.module#Chapter2PageModule' },
  { path: 'chapter3', loadChildren: './chapter3/chapter3.module#Chapter3PageModule' },
  { path: 'chapter4', loadChildren: './chapter4/chapter4.module#Chapter4PageModule' },
  { path: 'chapter5', loadChildren: './chapter5/chapter5.module#Chapter5PageModule' },
  { path: 'chapter6', loadChildren: './chapter6/chapter6.module#Chapter6PageModule' },
  { path: 'chapter7', loadChildren: './chapter7/chapter7.module#Chapter7PageModule' },
  { path: 'chapter8', loadChildren: './chapter8/chapter8.module#Chapter8PageModule' },
  { path: 'chapter9', loadChildren: './chapter9/chapter9.module#Chapter9PageModule' },
  { path: 'chapter10', loadChildren: './chapter10/chapter10.module#Chapter10PageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
