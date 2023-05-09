import { Component, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() selectedRecipeItem: Recipe;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService){}

  addIngredientToShoppingList(){
    console.log(this.selectedRecipeItem);
    this.shoppingListService.addIngreditens(this.selectedRecipeItem.ingredients);
  }

}
