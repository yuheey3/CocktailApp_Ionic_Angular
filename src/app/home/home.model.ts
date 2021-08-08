export interface Category {
    name: [string];

}
export interface FirstLetter {
    name: [string];

}
export interface LetterByUser {
    letter: string;

}
export interface CocktailName {
    name: string;
}
export interface SelectedCategory {
    name: string;
}
export interface SelectedCategoryList {
    name: [string];

}
export class MyFavorite {
    name: string;
    img: string;

    constructor(n: string, i: string) {
        this.name = n;
        this.img = i;
    }
}