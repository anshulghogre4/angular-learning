import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[];
  // @Output('recipeWasSelected') recipeWasSelected = new EventEmitter<Recipe>();
  constructor(
    private _recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipies = this._recipeService.getRecipies();
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  // onSelecredRecipeOnList(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
