import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastNovelsPageRoutingModule } from './last-novels-routing.module';

import { LastNovelsPage } from './last-novels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastNovelsPageRoutingModule
  ],
  declarations: [LastNovelsPage]
})
export class LastNovelsPageModule {}
