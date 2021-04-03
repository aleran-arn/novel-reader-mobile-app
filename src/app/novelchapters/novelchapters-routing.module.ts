import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovelchaptersPage } from './novelchapters.page';

const routes: Routes = [
  {
    path: '',
    component: NovelchaptersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovelchaptersPageRoutingModule {}
