import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category, CocktailName } from './home.model';
import { Observable } from 'rxjs';
//import * as internal from 'stream';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = '';
  categories: Category;



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




}
