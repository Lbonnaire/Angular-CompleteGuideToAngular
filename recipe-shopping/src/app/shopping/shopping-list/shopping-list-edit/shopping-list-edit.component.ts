import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent implements OnInit, OnDestroy
{
  @ViewChild('f',{static:false}) slForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;

  constructor(private slService:ShoppingListService){

  }
  ngOnInit(): void {
    this.subscription=this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem= this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    );
  }
  onSubmit(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    }else{
    this.slService.addIngredient(newIngredient);
    }
    this.editMode=false;
    this.slForm.reset();
    
  }


  ngOnDestroy(): void {
    
    this.subscription.unsubscribe();
  }

  onDeleteItem(){
    this.onClear();
    this.slService.deleteIngredient(this.editedItemIndex)
    this.slForm.reset();
    this.editMode=false;
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
}
