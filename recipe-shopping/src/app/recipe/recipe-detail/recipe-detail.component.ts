import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingListService } from "../../shopping/shopping-list/shopping-list.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";

@Component({
    selector:"app-recipe-detail",
    templateUrl:"./recipe-detail.component.html",
    styleUrl:"./recipe-detail.component.css"
})

export class RecipeDetailComponent implements OnInit{
    recipe:Recipe;
    id:number;
    constructor(private slService:ShoppingListService,private router:Router,private route:ActivatedRoute,private recService:RecipeService) {

    }
    ngOnInit(): void {

        this.route.params.subscribe(
            (params:Params)=>{
              this.id=+params['id'];
              this.recipe= this.recService.getRecipe(this.id);
            }
          );
        //   this.recipe = this.recService.getRecipe(this.route.snapshot.params['id']);
    }
    onSelectToShoppingList(){
        this.slService.addIngredients(this.recipe.ingredients);
        console.log("sending: "+this.recipe.ingredients);
    }

    onEditRecipe(){
        this.router.navigate(['edit'],{relativeTo:this.route});
    }

    onDeleteRecipe(){
        this.recService.deleteRecipe(this.id);
        this.router.navigate(['']);
    }


}