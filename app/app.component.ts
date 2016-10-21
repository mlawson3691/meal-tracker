import { Component } from '@angular/core';
import { Food }      from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <h1>Meal Tracker</h1>
    <food-list
      [childFoodList]="masterFoodList"
      (editFoodSender)="setFoodToEdit($event)"
    ></food-list>
    <div class='row'>
      <new-food class='col-sm-6'
        (newFoodSender)="addNewFood($event)"
      ></new-food>
      <edit-food class='col-sm-6'
        [foodToEdit]="selectedFood"
        (doneEditSender)="doneEditing()"
      ></edit-food>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food('Apple', 'A granny smith apple.', 100),
    new Food('Potato Chips', 'I ate the whole bag! :(', 1000),
    new Food('Steak', 'A special dinner out', 700),
    new Food('Baked Potato', 'To go with the steak', 160),
    new Food('Brussel Sprouts', 'Healthy side dish!', 40)
  ];
  public selectedFood: Food = null;

  addNewFood(foodToAdd) {
    this.masterFoodList.push(foodToAdd);
  }

  setFoodToEdit(foodToEdit) {
    this.selectedFood = foodToEdit;
  }

  doneEditing() {
    this.selectedFood = null;
  }
}
