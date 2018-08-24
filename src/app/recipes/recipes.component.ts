import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDatails = Recipe;

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetails(event) {
    this.recipeDatails = event;

    console.log('event === ', this.recipeDatails);
  }

}
