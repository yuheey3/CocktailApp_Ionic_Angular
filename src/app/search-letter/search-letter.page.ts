import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstLetter, LetterByUser } from '../home/home.model';

@Component({
  selector: 'app-search-letter',
  templateUrl: './search-letter.page.html',
  styleUrls: ['./search-letter.page.scss'],
})
export class SearchLetterPage implements OnInit {

  firstLetters: FirstLetter;
  letterByUser: LetterByUser;
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.firstLetters = {
      name: [''],
   
      }

    this.activatedRoute.paramMap.subscribe(paramMap => {
    this.letterByUser = this.homeService.getLetterByUser();
    this.homeService.getFirstLetter(this.letterByUser.letter).subscribe(
      (res) => {
        this.firstLetters = res;
      });
        });

      }
  
    }