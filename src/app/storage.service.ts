import { Injectable } from '@angular/core';
import { MyFavorite } from './home/home.model';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;


  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // add new record to the storage
  public addMyFavorite(key: string, value: any) {
    var newFavorite = new MyFavorite(key, value);
    this._storage?.set(key, newFavorite);

  }


  // get all records from the storage
  public getAll() {
    var myFav: MyFavorite[] = [];
    if (this._storage != null) {
      this._storage.forEach((value, key, index) => {
        myFav.push(value as MyFavorite);
      });
    }
    return myFav;
  }


  // remove a record from the storage
  public async removeFavorite(fav: MyFavorite) {
    await this._storage.remove(fav.name);
  }
}
