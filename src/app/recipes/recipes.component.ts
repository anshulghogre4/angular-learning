import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService], optional if you hav'nt used
  //@Injectable({providedIn: 'root',})
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
