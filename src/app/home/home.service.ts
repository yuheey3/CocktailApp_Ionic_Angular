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
 



  constructor(private http: HttpClient) { }

 
  
  private cocktailName: CocktailName = {
   name: 'name',
  }

  pushCocktailName(p: CocktailName) {
    this.cocktailName = p;
  }

  getCocktailName() {
    return this.cocktailName;
  }

  private letterByUser: LetterByUser = {
    letter: 'a',
   }
 
   pushLetterByUser(l: LetterByUser) {
     this.letterByUser = l;
   }
 
   getLetterByUser() {
     return this.letterByUser;
   }
   
   private categoryByUser: SelectedCategory = {
    name: 'a',
   }
 
   pushCateogryByUser(s: SelectedCategory) {
     this.categoryByUser = s;
   }
 
   getCategoryByUser() {
     return this.categoryByUser;
   }


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

  getSingleCategory(s: string) {
    this.url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+s;
   

    this.selectedCategoryList = {

      name: [''],
      //img: [''],
  

    }
    return this.http.get(this.url).
      pipe(
        map(resultData => {

          // extract string category name
          resultData["drinks"].forEach(element => {
          
            this.selectedCategoryList.name.push(element["strDrink"]);
          //  this.selectedCategoryList.img.push(element["strDrinkThumb"]);
          
          });
          console.log(this.selectedCategoryList)
          return this.selectedCategoryList;


        })
      )
  }

  getFirstLetter(s: string) {
    this.url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='+ s;

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




}
