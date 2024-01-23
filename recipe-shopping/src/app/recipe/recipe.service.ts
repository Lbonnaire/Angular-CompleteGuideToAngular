import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService{
    private recipeSelected=new Subject();
    recipeChanged = new Subject<Recipe[]>();
    // private recipes: Recipe[]=[
    //     new Recipe("Test Recipe", "test desc", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3G_VG79HMesxpr-ehe-CyijuB3auNhkPf_w&usqp=CAU",
    //     [
    //         new Ingredient('Meat',1),
    //         new Ingredient('French Fries',20)
    //     ]),
    //     new Recipe("Test Recipe2", "test desc2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3G_VG79HMesxpr-ehe-CyijuB3auNhkPf_w&usqp=CAU",[
    //         new Ingredient('Buns',2),
    //         new Ingredient('Meat',1)
    //     ]),
    //   ]
    private recipes: Recipe[]=[];
      getRecipe(id:number){
        const recipe = this.recipes[id];
        return recipe;
      }

      // getSelectedRecipe(){
      //   return this.recipeSelected
      // }

      getRecipes(){
        return this.recipes.slice();
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index]= newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }

      setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipeChanged.next(this.recipes.slice());
      }

}