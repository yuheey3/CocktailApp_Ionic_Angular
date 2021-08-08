import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category, CocktailName, FirstLetter, LetterByUser } from './home.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = '';
  categories: Category;
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


  getCategories() {
    this.url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    this.categories = {

      name: [''],
  

    }
    return this.http.get(this.url).
      pipe(
        map(resultData => {

          // extract string category name
          resultData["drinks"].forEach(element => {
          
            this.categories.name.push(element["strCategory"]);
          
          });
          console.log(this.categories)
          return this.categories;


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
