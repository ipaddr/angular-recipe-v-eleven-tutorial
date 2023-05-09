import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;
  @Output() passingNameAndAmonutSelected = new EventEmitter<Ingredient>();
  
  onAdd(){
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    console.log(name, " ", amount);
    this.passingNameAndAmonutSelected.emit(new Ingredient(name, amount));
  }

}
