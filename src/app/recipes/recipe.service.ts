import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Ice Tea','Tea with ice and less sugar'
    ,'https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?b=1&s=170667a&w=0&k=20&c=bcE72Zq71JEVt_lfL0fYWMCMjYV4AtxHxxB4EMIZamw='
    ,[
      new Ingredient('Ice', 5),
      new Ingredient('Tea', 10),
      new Ingredient('Sugar', 2)
    ]),
    new Recipe('Sate','Mass rice with spicy souces'
    ,'https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?b=1&s=170667a&w=0&k=20&c=bcE72Zq71JEVt_lfL0fYWMCMjYV4AtxHxxB4EMIZamw='
    ,[
      new Ingredient('Chili', 5),
      new Ingredient('Water', 10),
      new Ingredient('Meat', 20),
    ]),
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  getRecipeList(){
    return this.recipes.slice();
  }



}
