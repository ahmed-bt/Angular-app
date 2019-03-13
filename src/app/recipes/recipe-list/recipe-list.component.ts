import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is simlpy a test',
     'https://assets.marthastewart.com/styles/wmax-750/d15/mh_1051_gnocchi/mh_1051_gnocchi_horiz.jpg?itok=OzCJO_oB'),
     new Recipe('Recipe 2', 'This is simlpy a test',
     'https://assets.marthastewart.com/styles/wmax-750/d15/mh_1051_gnocchi/mh_1051_gnocchi_horiz.jpg?itok=OzCJO_oB'),
     new Recipe('Recipe 3', 'This is simlpy a test',
     'https://assets.marthastewart.com/styles/wmax-750/d15/mh_1051_gnocchi/mh_1051_gnocchi_horiz.jpg?itok=OzCJO_oB'),
     new Recipe('Recipe 4', 'This is simlpy a test',
     'https://assets.marthastewart.com/styles/wmax-750/d15/mh_1051_gnocchi/mh_1051_gnocchi_horiz.jpg?itok=OzCJO_oB')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
