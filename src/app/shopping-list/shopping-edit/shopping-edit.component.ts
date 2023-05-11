import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') shoppingListForm : NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem : Ingredient;

  constructor(private shoppingListService: ShoppingListService){}
  
  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        console.log(this.shoppingListForm);
        this.shoppingListForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        });
      }
    );
  }

  onAdd(form: NgForm ){
    const name = form.value.name;
    const amount = form.value.amount;
    const newIngredient = new Ingredient(name, amount);
    if(this.editMode){
      this.shoppingListService.updateIngredients(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngrediten(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onDelete(){
    this.onClear();
    this.shoppingListService.deleteIngredients(this.editedItemIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
