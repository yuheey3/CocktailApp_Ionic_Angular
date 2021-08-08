import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';
import { Detail } from './detail.model';
import { CocktailName } from '../home/home.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  cocktailName : CocktailName;
  cacktailNameStr: string
  details: Detail;
  strDrinkS : string;
  strTagsS: string;
  strCategoryS : string;
  strInstructionsS : string;
  strDrinkThumbS: string;

  constructor(private activatedRoute: ActivatedRoute,private router: Router, private homesService: HomeService, private detailService: DetailService ) { }

  ngOnInit() {
    this.details = {
      strDrink : [''],
      strTags :  [''],
      strCategory :  [''],
      strInstructions :  [''],
      strDrinkThumb :  [''],
   
      }

    this.activatedRoute.paramMap.subscribe(paramMap => {
    //this.strDrinkS = 'mmmm';
      this.cocktailName = this.homesService.getCocktailName();
      this.cacktailNameStr = this.cocktailName.name;
      console.log(this.cocktailName.name);





    
          //this.detailService.getDetails('afternoon').subscribe(
         this.detailService.getDetails(this.cacktailNameStr).subscribe(
      (res) => {
        this.details = res;
        
        //To remove ','
        this.strDrinkS = this.details.strDrink.toString();
        this.strDrinkS = this.strDrinkS.replace(/,/g, "")
        this.strTagsS = this.details.strTags.toString();
        this.strTagsS = this.strTagsS.replace(/,/g, "")
        this.strCategoryS = this.details.strCategory.toString();
        this.strCategoryS = this.strCategoryS.replace(/,/g, "")
        this.strInstructionsS = this.details.strInstructions.toString();
        this.strInstructionsS = this.strInstructionsS.replace(/,/g, "")
        this.strDrinkThumbS = this.details.strDrinkThumb.toString();
        this.strDrinkThumbS = this.strDrinkThumbS.replace(/,/g, "")
      });

    })
   
   

    

   }



  
}
