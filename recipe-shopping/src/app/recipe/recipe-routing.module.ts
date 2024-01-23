import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./recipe.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipesHomeComponent } from "./recipes-home/recipes-home.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeResolver } from "./recipe-resolver.service";


const routes: Routes=[
    {
        path:'', 
        component:RecipeComponent,
        canActivate:[AuthGuard],
        children:[
    {
        path:'',
        component:RecipesHomeComponent
    },
    {
        path:'new',
        component:RecipeEditComponent
    },
    {
        path:':id',
        component:RecipeDetailComponent, 
        resolve:[RecipeResolver]
    },
    {
        path:':id/edit',
        component:RecipeEditComponent, 
        resolve:[RecipeResolver]
    }
]}]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class RecipeRoutingModule{
    
}