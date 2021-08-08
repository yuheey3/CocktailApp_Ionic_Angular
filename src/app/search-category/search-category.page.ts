import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, SelectedCategory } from '../home/home.model';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.page.html',
  styleUrls: ['./search-category.page.scss'],
})
export class SearchCategoryPage implements OnInit {
  categories: Category;
  selectedCategory: SelectedCategory
  //searchCategory: Category[] = [];
  //searchCategoryOriginal: Category[] = [];

  searchText: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.searchText = "";

    this.categories = {
      name: [''],

    }
    this.selectedCategory = {
      name: '',

    }


    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.homeService.getCategories().subscribe(
        (res) => {
          this.categories = res;
        });
    });

  }

  // on item click navigate to category list page
  onItemClick(name: string) {
    this.selectedCategory.name = name;
    this.homeService.pushCateogryByUser(this.selectedCategory);
    this.router.navigate(['category-list']);
  }

  // // filter the countries based on search input
  // filterCategory(){
  //   this.searchCategory = [];
  //   this.categories = this.homeService.filterCategories(this.countriesOriginal, this.searchText);
  // }
  //   
}