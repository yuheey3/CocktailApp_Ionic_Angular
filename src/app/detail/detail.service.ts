import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Detail } from './detail.model';


@Injectable({
  providedIn: 'root'
})
export class DetailService {
  url = '';
  details: Detail;
  strDrinkS: string;


  constructor(private http: HttpClient) { }


  getDetails(n: string) {
    this.url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + n;

    this.details = {

      strDrink: [''],
      strTags: [''],
      strCategory: [''],
      strInstructions: [''],
      strDrinkThumb: [''],
    }

    return this.http.get(this.url).
      pipe(
        map(resultData => {

          resultData["drinks"].forEach(element => {
            this.details.strDrink.push(element["strDrink"]);
            this.details.strTags.push(element["strTags"]);
            this.details.strCategory.push(element["strCategory"]);
            this.details.strInstructions.push(element["strInstructions"]);
            this.details.strDrinkThumb.push(element["strDrinkThumb"]);

          });

          return this.details;
        })

      )
  }

}



