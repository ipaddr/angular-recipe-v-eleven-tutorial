import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredientChangedSubscribtion: Subscription = Subscription.EMPTY

  ingredients: Ingredient[] = [];

  constructor(private shoppingListService : ShoppingListService){}

  ngOnInit(): void {
      this.ingredients = this.shoppingListService.getIngredients();
      this.ingredientChangedSubscribtion = this.shoppingListService.ingredientChanged.subscribe(
        (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
        }
      );
  }

  onEdit(index: Number){
    this.shoppingListService.startEditing.next(index);
  }

  ngOnDestroy(): void {
      this.ingredientChangedSubscribtion.unsubscribe();
  }

}
