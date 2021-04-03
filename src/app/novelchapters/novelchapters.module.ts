import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovelchaptersPageRoutingModule } from './novelchapters-routing.module';

import { NovelchaptersPage } from './novelchapters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovelchaptersPageRoutingModule
  ],
  declarations: [NovelchaptersPage]
})
export class NovelchaptersPageModule {}
