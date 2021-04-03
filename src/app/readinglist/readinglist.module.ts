import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadinglistPageRoutingModule } from './readinglist-routing.module';

import { ReadinglistPage } from './readinglist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadinglistPageRoutingModule
  ],
  declarations: [ReadinglistPage]
})
export class ReadinglistPageModule {}
