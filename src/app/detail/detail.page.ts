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
  strDrink : string;
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
    //this.strDrink = 'mmmm';
      this.cocktailName = this.homesService.getCocktailName();
      this.cacktailNameStr = this.cocktailName.name;
      console.log(this.cocktailName.name);





    
          //this.detailService.getDetails('afternoon').subscribe(
         this.detailService.getDetails(this.cacktailNameStr).subscribe(
      (res) => {
        this.details = res;
        
       // this.strDrink = this.details.strDrink;
        //this.strDrink = this.details.strDrink.toString();
      });

    })

    

   }



  
}
