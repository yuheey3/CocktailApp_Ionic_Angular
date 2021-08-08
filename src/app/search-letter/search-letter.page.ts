import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailName, FirstLetter, LetterByUser } from '../home/home.model';
import { hostViewClassName } from '@angular/compiler';

@Component({
  selector: 'app-search-letter',
  templateUrl: './search-letter.page.html',
  styleUrls: ['./search-letter.page.scss'],
})
export class SearchLetterPage implements OnInit {

  firstLetters: FirstLetter;
  letterByUser: LetterByUser;
  cocktailName: CocktailName;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.firstLetters = {
      name: [''],

    }
    this.cocktailName = {
      name: '',

    }

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.letterByUser = this.homeService.getLetterByUser();
      this.homeService.getFirstLetter(this.letterByUser.letter).subscribe(
        (res) => {
          this.firstLetters = res;
        });
    });

  }


  // on item click navigate to details page
  onItemClick(name: string) {
    this.cocktailName.name = name;
    this.homeService.pushCocktailName(this.cocktailName);
    this.router.navigate(['detail']);
  }

}