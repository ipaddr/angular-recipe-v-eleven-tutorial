import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngrediten(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients);
  }

  addIngreditens(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients);
  }
}
