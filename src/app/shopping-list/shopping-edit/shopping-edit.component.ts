import { Component, OnInit, ViewChild, EventEmitter, ElementRef, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addNewnewIngredientEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const ingredName = this.nameInput.nativeElement.value;
    const ingredAmount = this.amountInput.nativeElement.value;
    const newIngredientObj = new Ingredient(ingredName, ingredAmount);
    this.addNewnewIngredientEvent.emit(newIngredientObj);   
  }

}
