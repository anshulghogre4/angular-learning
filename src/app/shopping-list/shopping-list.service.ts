import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Orange', 5),
    new Ingredient('Tamarind', 5),
    new Ingredient('jujube', 5),
  ];
  constructor() {}

  getIngeredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    //option 1
    // ingredient.forEach((obj) => {
    //   this.ingredients.push(obj);
    // });
    //option 2
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    //option- 3
    //spread operator convert array into the list
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
