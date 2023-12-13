import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Orange', 5),
  //   new Ingredient('Tamarind', 5),
  //   new Ingredient('jujube', 5),
  // ];
  ingredients: Ingredient[];
  subscription: Subscription;
  constructor(private _shoppingListService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.ingredients = this._shoppingListService.getIngeredients();
    this.subscription = this._shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  // onAddingIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
}
