import { NgModule } from "@angular/core";
import { RecipeComponent } from "./recipe.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesHomeComponent } from "./recipes-home/recipes-home.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RouterModule } from "@angular/router";
import {  ReactiveFormsModule } from "@angular/forms";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations:[
        RecipeComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipesHomeComponent,
        RecipeEditComponent,
    ],
    imports:[
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        RecipeRoutingModule
    ],
    exports:[
        RecipeComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipesHomeComponent,
        RecipeEditComponent,
    ]
})

export class RecipesModule{

}