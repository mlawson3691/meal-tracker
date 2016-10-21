import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
import { CaloriesPipe } from './calories.pipe'

@Component({
  selector: 'food-list',
  template: `
  <div class='filters'>
    <label>Sort by Calories: </label>
    <select (change)='onCalorieChange($event.target.value)' class='form-control'>
      <option value='all'>All</option>
      <option value='low'>Low</option>
      <option value='high'>High</option>
    </select>
  </div>
  <div class='filters'>
    <label>Sort by Meal: </label>
    <select (change)='onMealChange($event.target.value)' class='form-control'>
      <option value='All'>All</option>
      <option value='Breakfast'>Breakfast</option>
      <option value='Lunch'>Lunch</option>
      <option value='Dinner'>Dinner</option>
      <option value='Snack'>Snack</option>
    </select>
  </div>
  <br>
  <div *ngFor="let food of childFoodList | calories:selectedCalorieLevel | meal:selectedMeal" class='food-item'>
    <h4>{{ food.name }} <button (click)="editClicked(food)" class='btn btn-link '>Edit</button></h4>
    <div class='well'>
      <p><b>Meal:</b> {{ food.meal }}</p>
      <p><b>Details:</b> {{ food.details }}</p>
      <button (click)="deleteClicked(food)" class='btn btn-link pull-right'>Delete</button>
      <p><b>Calories:</b> {{ food.calories}}</p>
    </div>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() editFoodSender = new EventEmitter();
  @Output() deleteFoodSender = new EventEmitter();

  public selectedCalorieLevel: string = 'all';
  public selectedMeal: string = 'All';

  onCalorieChange(calorieLevel) {
    this.selectedCalorieLevel = calorieLevel;
  }

  onMealChange(meal) {
    this.selectedMeal = meal;
  }

  editClicked(foodToEdit) {
    this.editFoodSender.emit(foodToEdit);
  }

  deleteClicked(foodToDelete) {
    this.deleteFoodSender.emit(foodToDelete);
  }
}
