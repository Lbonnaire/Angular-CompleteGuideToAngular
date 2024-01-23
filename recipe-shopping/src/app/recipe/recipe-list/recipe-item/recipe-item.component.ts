import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe: Recipe;
  @Input() index:number;
  recipes:Recipe[];
  @Output() recipeSelected=new EventEmitter<void>();

  constructor(private recipeService:RecipeService, private router:Router,private route:ActivatedRoute){

  }

  ngOnInit(): void {
    
    this.recipes=this.recipeService.getRecipes();

  }


  // onRecipeClicked(){
  //     this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
