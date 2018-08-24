import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe1', 'Test1', 'https://images.101cookbooks.com/chana-masala-recipe-h.jpg'),
    new Recipe('A test Recipe2', 'Tes2t', 'https://images.101cookbooks.com/chana-masala-recipe-h.jpg')
  ];

  @Output() showRecipeEventForRecipeListComponent = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  showRecipeDetailForRecipeComponent(event) {
    console.log(event);
    this.showRecipeEventForRecipeListComponent.emit(event);
  }

}
