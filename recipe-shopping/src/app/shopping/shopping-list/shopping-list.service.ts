import { Ingredient } from "../../shared/ingredient.model";
import {Subject}from 'rxjs';

export class ShoppingListService{
    ingredientAdded = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("tomatoes", 10)
      ];

      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
      }

      getIngredients(){
        return this.ingredients.slice();

      }

      addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());
      }
      
      getIngredient(index:number){
        return this.ingredients[index];
      }

      updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index]= newIngredient;
        this.ingredientAdded.next(this.ingredients.slice());
      }

      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientAdded.next(this.ingredients.slice());
      }
    //   onIngredientAdded(){

    //   }


}