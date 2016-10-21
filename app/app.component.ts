import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <h1>Meal Tracker</h1>
    <calorie-count
      [childDailyCalories]="masterDailyCalories"
    ></calorie-count>
    <food-list
      [childFoodList]="masterFoodList"
      (editFoodSender)="setFoodToEdit($event)"
      (deleteFoodSender)="deleteFood($event)"
    ></food-list>
    <new-food
      [childFoodList]="masterFoodList"
      (newFoodSender)="addNewFood($event)"
    ></new-food>
    <edit-food
      [foodToEdit]="selectedFood"
      (doneEditSender)="doneEditing()"
      (udpateCaloriesSender)="updateTotalCalories()"
    ></edit-food>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food(1, 'Apple', 'A granny smith apple.', 100),
    new Food(2, 'Steak', 'A special dinner out', 700),
    new Food(3, 'Baked Potato', 'To go with the steak', 160),
    new Food(4, 'Brussel Sprouts', 'Healthy side dish!', 40)
  ];
  public masterDailyCalories: number = 1000;
  public selectedFood: Food = null;

  addNewFood(foodToAdd) {
    this.masterFoodList.push(foodToAdd);
    this.masterDailyCalories += foodToAdd.calories;
  }

  setFoodToEdit(foodToEdit) {
    this.selectedFood = foodToEdit;
  }

  doneEditing() {
    this.selectedFood = null;
  }

  updateTotalCalories() {
    var totalCalories = 0;
    for(var i = 0; i < this.masterFoodList.length; i++) {
      totalCalories += this.masterFoodList[i].calories;
    }
    this.masterDailyCalories = totalCalories;
  }

  deleteFood(food) {
    this.masterDailyCalories -= food.calories;
    for (var i = 0; i < this.masterFoodList.length; i++) {
      if (this.masterFoodList[i].id === food.id) {
        this.masterFoodList.splice(i, 1);
        break;
      }
    }
  }
}
