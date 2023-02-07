import { recipesList, recipesListing } from './../../core/recipes-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipesList: recipesListing[];
  constructor() {
    this.recipesList = recipesList;
   }

  ngOnInit(): void {
  }

}
