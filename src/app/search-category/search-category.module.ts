import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCategoryPageRoutingModule } from './search-category-routing.module';

import { SearchCategoryPage } from './search-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCategoryPageRoutingModule
  ],
  declarations: [SearchCategoryPage]
})
export class SearchCategoryPageModule {}
