import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() showRecipeEventForRecipeListComponent = 
  new EventEmitter<{name: string, description: string, imagePath: string}>();

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetails(recipe: Recipe) {
    this.showRecipeEventForRecipeListComponent.emit({
      name : recipe.name,
      description : recipe.description,
      imagePath : recipe.imagePath
    });
   }

}
