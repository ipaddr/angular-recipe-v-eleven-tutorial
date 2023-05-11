import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription
  recipes: Recipe[];

constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );

    this.recipes = this.recipeService.getRecipeList();
  }

  goToNewRecipePage(){
      this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
