import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RecipeService } from "./recipe.service";
import { Observable } from "rxjs";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";


@Injectable({providedIn:'root'})
export class RecipeResolver implements Resolve<Recipe[]>{


    constructor(private recService:RecipeService,private dataStorageServ:DataStorageService){

    }

    resolve(route:ActivatedRouteSnapshot,state: RouterStateSnapshot){
        const recipes=this.recService.getRecipes();
        if (recipes.length===0){
            return this.dataStorageServ.fetchRecipes();
        }else{
            return recipes;
        }
        

    }
}