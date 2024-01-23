import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingListEditComponent,
    ],
    imports:[
        RouterModule.forChild([
            {path:'', component:ShoppingListComponent},
        ]),
        SharedModule,
        FormsModule
        
    ],

    exports:[
        ShoppingListComponent,
        ShoppingListEditComponent,
    ]
})

export class ShoppingModule{

}