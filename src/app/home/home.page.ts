import { Component } from '@angular/core';
import { Category, CocktailName } from './home.model';
import { HomeService } from './home.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categories: Category;
  str :string;
  cocktailName: CocktailName;
  cocktailName2: CocktailName;
  
  input:string;

  constructor(private homeService: HomeService, private router: Router) { }



  ngOnInit() {
  
 this.cocktailName = this.homeService.getCocktailName();


    this.homeService.getCategories().subscribe(
      (res) => {
        this.categories = res;

      });


  }




  searchByName() {
  //console.log(this.name);
  
   this.cocktailName.name = this.input;
   //this.homeService.pushCocktailName(this.cocktailName);
   this.homeService.pushCocktailName(this.cocktailName);

   //this.cocktailName2 = this.homeService.getCocktailName();


 
   this.str = this.input
   this.router.navigate(['detail']);
   
  }
  searchCategory()
{
  this.router.navigate(['search-category']);
}

}




