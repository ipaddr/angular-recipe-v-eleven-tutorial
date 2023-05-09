import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  selectedRecipeItem: Recipe;

  onSelectedRecipeItemEvent(selectedRecipeItem: Recipe){
    console.log(selectedRecipeItem);
    this.selectedRecipeItem = selectedRecipeItem;
  }

}
