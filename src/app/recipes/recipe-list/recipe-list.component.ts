import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  
  recipes: Recipe[] = [
    new Recipe('The First Recipe','First Description','https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?b=1&s=170667a&w=0&k=20&c=bcE72Zq71JEVt_lfL0fYWMCMjYV4AtxHxxB4EMIZamw='),
    new Recipe('The Second Recipe','Second Description','https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?b=1&s=170667a&w=0&k=20&c=bcE72Zq71JEVt_lfL0fYWMCMjYV4AtxHxxB4EMIZamw='),
  ];

  @Output() selectedRecipeItemEvent = new EventEmitter<Recipe>();

  onRecipeItemClicked(recipeItem:Recipe){
    console.log(recipeItem);
    this.selectedRecipeItemEvent.emit(recipeItem);
  }
}
