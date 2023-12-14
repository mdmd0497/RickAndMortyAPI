import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodesPageRoutingModule } from './episodes-routing.module';

import { EpisodesPage } from './episodes.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodesPageRoutingModule,
    SharedModule
  ],
  declarations: [EpisodesPage]
})
export class EpisodesPageModule {}
