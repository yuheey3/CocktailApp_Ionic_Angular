import { Component } from '@angular/core';
import { Category, CocktailName, LetterByUser } from './home.model';
import { HomeService } from './home.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categories: Category;
  cocktailName: CocktailName;
  cocktailName2: CocktailName;
  letterValue: LetterByUser;
  
  input:string;
  letter: string;

  constructor(private homeService: HomeService, private router: Router) { }



  ngOnInit() {
  
 this.cocktailName = this.homeService.getCocktailName();
 this.letterValue = this.homeService.getLetterByUser();


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


 
   this.input = "";
   this.router.navigate(['detail']);
   
  }
  searchCategory()
{
  this.router.navigate(['search-category']);
}
searchByFirstLetter()
{
  this.letterValue.letter = this.letter;
  this.homeService.pushLetterByUser(this.letterValue);
  this.letter = "";
  this.router.navigate(['search-letter']);
}
clickFavorite(){
  this.router.navigate(['/my-favorite']); 
}
}




