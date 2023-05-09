import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientChanged = new Subject<Ingredient[]>();

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngrediten(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients);
  }

  addIngreditens(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients);
  }
}
