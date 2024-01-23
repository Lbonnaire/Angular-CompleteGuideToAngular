import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipe/recipe.service";
import { Recipe } from "../recipe/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient,
        private recService: RecipeService,
        private authService: AuthService
    ) {
    }

    storeRecipes() {
        const recipes = this.recService.getRecipes();
        this.http.put('https://ng-course-recipe-book-fcd72-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {

        return this.http.get<Recipe[]>('https://ng-course-recipe-book-fcd72-default-rtdb.firebaseio.com/recipes.json')
        .pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {
                        ...recipe,
                        ingredients: recipe.ingredients ? recipe.ingredients : []
                    };
                });
            }),
            tap(
                recipes => {
                    this.recService.setRecipes(recipes);
                }
            )
        );

    }
}