import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit,OnDestroy{
    ingredients:Ingredient[];
    private igChangeSub: Subscription;

    constructor(private slService:ShoppingListService, private loggingService:LoggingService){
  
    }
    ngOnInit(): void {
      this.ingredients=this.slService.getIngredients();
      this.igChangeSub= this.slService.ingredientAdded.subscribe(
        (ing:Ingredient[])=>{this.ingredients=ing}
      );
      this.loggingService.printLog('Hello from ShoppingListComponent in ngOnInit');
    }

    ngOnDestroy(): void {
      this.igChangeSub.unsubscribe();
    }

    onEditItem(index:number){
      this.slService.startedEditing.next(index);
    }
    

  
}
