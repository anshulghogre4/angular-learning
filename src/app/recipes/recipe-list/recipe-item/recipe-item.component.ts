import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('recipe') recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();
  @Input() index: number;
  // constructor(private _recipeService: RecipeService) {}
  // onSelectdItem() {
  //   // this.recipeSelected.emit();
  //   this._recipeService.recipeSelected.emit(this.recipe);
  // }
}
