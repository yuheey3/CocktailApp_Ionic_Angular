import { Component } from '@angular/core';
import { Category } from './home.model';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categories: Category;

  constructor(private homeService: HomeService) { }



  ngOnInit() {

    this.homeService.getCategories().subscribe(
      (res) => {
        this.categories = res;

      });


  }


}




