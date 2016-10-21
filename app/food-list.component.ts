import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
import { CaloriesPipe } from './calories.pipe'

@Component({
  selector: 'food-list',
  template: `
  <div class='form-inline'>
    <label>Sort by Calories: </label>
    <select (change)='onChange($event.target.value)' class='form-control'>
      <option value='all'>All</option>
      <option value='low'>Low</option>
      <option value='high'>High</option>
    </select>
  </div>
  <div *ngFor="let food of childFoodList | calories:selectedCalorieLevel" class='well'>
  <button (click)="deleteClicked(food)" class='btn pull-right'>X</button>
    <h4>{{ food.name }}</h4>
    <p><b>Details:</b> {{ food.details }}</p>
    <p><b>Calories:</b> {{ food.calories}}</p>
    <button (click)="editClicked(food)" class='btn'>Edit</button>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() editFoodSender = new EventEmitter();
  @Output() deleteFoodSender = new EventEmitter();

  public selectedCalorieLevel: string = 'all';

  onChange(calorieLevel) {
    this.selectedCalorieLevel = calorieLevel;
  }

  editClicked(foodToEdit) {
    this.editFoodSender.emit(foodToEdit);
  }

  deleteClicked(foodToDelete) {
    this.deleteFoodSender.emit(foodToDelete);
  }
}
