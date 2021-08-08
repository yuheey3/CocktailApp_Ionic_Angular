import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchLetterPageRoutingModule } from './search-letter-routing.module';

import { SearchLetterPage } from './search-letter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchLetterPageRoutingModule
  ],
  declarations: [SearchLetterPage]
})
export class SearchLetterPageModule {}
