import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';
import { HomeService } from '../home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailName, MyFavorite } from '../home/home.model';


@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.page.html',
  styleUrls: ['./my-favorite.page.scss'],
})
export class MyFavoritePage {
  myFavs: MyFavorite[];
  cocktailName: CocktailName;

  constructor(private storgeService: StorageService, private router: Router, private alertController: AlertController, private homeService: HomeService) { }

  ngOnInit() {
    this.cocktailName = {
      name: '',

    }

    this.myFavs = this.storgeService.getAll();
  }


  ionViewWillEnter() {
    this.myFavs = this.storgeService.getAll();
  }

  // on item click navigate to details page
  onItemClick(name: string) {
    this.cocktailName.name = name;
    this.homeService.pushCocktailName(this.cocktailName);
    this.router.navigate(['detail']);
  }

  removeMyFavorite(favToDelete: MyFavorite) {

    this.alertController.create({
      header: 'Danger!!!',
      message: 'Are sure you want to delete?? ',
      buttons: [{
        text: 'delete',
        handler: () => {
          this.storgeService.removeFavorite(favToDelete);
          this.myFavs = this.storgeService.getAll();
        }
      }, 'Cancel']

    }).then(alert => {
      alert.present();
    })

  }

}
