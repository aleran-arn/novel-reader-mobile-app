import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'readinglist',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'reader/:novelId/:chapterId',
    loadChildren: () => import('./reader/reader.module').then( m => m.ReaderPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'last-novels',
    loadChildren: () => import('./last-novels/last-novels.module').then( m => m.LastNovelsPageModule)
  },
  {
    path: 'readinglist',
    loadChildren: () => import('./readinglist/readinglist.module').then( m => m.ReadinglistPageModule)
  },
  {
    path: 'novelchapters/:novelId',
    loadChildren: () => import('./novelchapters/novelchapters.module').then( m => m.NovelchaptersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
