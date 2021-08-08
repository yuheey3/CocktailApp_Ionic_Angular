import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailName, FirstLetter, LetterByUser, SelectedCategory, SelectedCategoryList } from '../home/home.model';
import { hostViewClassName } from '@angular/compiler';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  selectedCategories: SelectedCategory
  selectedCategoryLists: SelectedCategoryList
  cocktailName: string
  cocktailImg: string
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.selectedCategories = {
      name: '',

    }
    this.selectedCategoryLists = {
      name: [''],

    }

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.selectedCategories = this.homeService.getCategoryByUser();
      this.homeService.getSingleCategory(this.selectedCategories.name).subscribe(
        (res) => {
          this.selectedCategoryLists = res;
        });
    });
  }


  // on item click navigate to details page
  onItemClick(name: string) {
    this.selectedCategories.name = name;
    this.homeService.pushCocktailName(this.selectedCategories);
    this.router.navigate(['detail']);
  }

}
