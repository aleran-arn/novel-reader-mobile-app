import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastNovelsPage } from './last-novels.page';

const routes: Routes = [
  {
    path: '',
    component: LastNovelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastNovelsPageRoutingModule {}
