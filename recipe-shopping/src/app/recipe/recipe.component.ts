import { Component, OnInit } from "@angular/core";

import { RecipeService } from "./recipe.service";
import { ActivatedRoute, Data, Router } from "@angular/router";

@Component({
    selector:"app-recipe",
    templateUrl:"./recipe.component.html",
    styleUrl:"./recipe.component.css",
    providers:[]
})

export class RecipeComponent implements OnInit{
    // selectedRecipe:Recipe;
    // public recipes:Recipe[];

    constructor(private recipeService:RecipeService, private router:Router, private route:ActivatedRoute){

    }

    ngOnInit(): void {
        // this.recipeService.recipeSelected.subscribe(
        //     (recipe:Recipe)=>{
        //         this.selectedRecipe=recipe;
        //     }
        // // );
        // this.recipes= this.recipeService.getRecipes();

    
        // this.selectedRecipe=this.recipeService.getRecipe(this.route.snapshot.params['id']);  
        
    }

}