import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService){}
  
  onAdd(){
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    console.log(name, " ", amount);
    this.shoppingListService.addIngrediten(new Ingredient(name, amount));
  }

}
