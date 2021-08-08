import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category, CocktailName, FirstLetter, LetterByUser, SelectedCategory, SelectedCategoryList } from './home.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = '';
  categories: Category;
  selectedCategoryList: SelectedCategoryList;
  firstLetters: FirstLetter
  filteredCategory: Category[] = [];

  constructor(private http: HttpClient) { }


  //cocktail Name
  private cocktailName: CocktailName = {
    name: 'name',
  }

  pushCocktailName(p: CocktailName) {
    this.cocktailName = p;
  }

  getCocktailName() {
    return this.cocktailName;
  }

  //First letter by user
  private letterByUser: LetterByUser = {
    letter: 'a',
  }

  pushLetterByUser(l: LetterByUser) {
    this.letterByUser = l;
  }

  getLetterByUser() {
    return this.letterByUser;
  }

  //category by user
  private categoryByUser: SelectedCategory = {
    name: 'a',
  }

  pushCateogryByUser(s: SelectedCategory) {
    this.categoryByUser = s;
  }

  getCategoryByUser() {
    return this.categoryByUser;
  }

  //get all category list
  getCategories() {
    this.url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    this.categories = {

      name: [''],


    }
    return this.http.get(this.url).
      pipe(
        map(resultData => {

          // extract string all cocktail Name of the selected category
          resultData["drinks"].forEach(element => {

            this.categories.name.push(element["strCategory"]);

          });
          console.log(this.categories)
          return this.categories;


        })
      )
  }
  //get selected category list
  getSingleCategory(s: string) {
    this.url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + s;


    this.selectedCategoryList = {

      name: [''],

    }
    return this.http.get(this.url).
      pipe(
        map(resultData => {

          // extract string category name
          resultData["drinks"].forEach(element => {

            this.selectedCategoryList.name.push(element["strDrink"]);

          });
          console.log(this.selectedCategoryList)
          return this.selectedCategoryList;


        })
      )
  }
  //get all list of cocktail name by selected first letter
  getFirstLetter(s: string) {
    this.url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + s;

    this.firstLetters = {

      name: [''],


    }
    return this.http.get(this.url).
      pipe(
        map(resultData => {

          // extract string cacktail name search by first letter
          resultData["drinks"].forEach(element => {

            this.firstLetters.name.push(element["strDrink"]);

          });
          console.log(this.firstLetters)
          return this.firstLetters;


        })
      )
  }

  // helper function
  filterCategories(categories: Category[], key: string) {
    this.filteredCategory = [];

    categories.forEach((category) => {

      this.filteredCategory.push(category);

    });

    return this.filteredCategory;

  }

}
