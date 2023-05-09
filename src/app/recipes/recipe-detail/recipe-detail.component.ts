import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipeItem: Recipe;
  id:number = -1;

  constructor(private recipeService: RecipeService, 
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute, 
    private router: Router){}

  ngOnInit(): void {
      // this.id = +this.route.snapshot.params['id'];
      // this.selectedRecipeItem = this.recipeService.getRecipe(this.id);
      this.route.params.subscribe(
        (params) => {
          this.id = +params['id'];
          this.selectedRecipeItem = this.recipeService.getRecipe(this.id);
        }
      );
  }

  addIngredientToShoppingList(){
    console.log(this.selectedRecipeItem);
    this.shoppingListService.addIngreditens(this.selectedRecipeItem.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
