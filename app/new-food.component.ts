import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  template: `
  <div class='well'>
    <h3>Add a Food</h3>
    <div class='form-group'>
      <label>Name:</label>
      <input #name class='form-control'>
    </div>
    <div class='form-group'>
      <label>Meal:</label>
      <select #meal class='form-control'>
        <option value='Breakfast'>Breakfast</option>
        <option value='Lunch'>Lunch</option>
        <option value='Dinner'>Dinner</option>
        <option value='Snack'>Snack</option>
      </select>
    </div>
    <div class='form-group'>
      <label>Details:</label>
      <input #details class='form-control'>
    </div>
    <div class='form-group'>
      <label>Calories:</label>
      <input #calories class='form-control'>
    </div>
    <button class='btn btn-link pull-right'
      (click)="addClicked(name.value, meal.value, details.value, calories.value);
      name.value='';
      meal.value='Breakfast';
      details.value='';
      calories.value='';
    ">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  @Input() childFoodList: Food[];
  @Output() newFoodSender = new EventEmitter();

  addClicked(name: string, meal: string, details: string, calories: string){
    var calorieInt: number = parseInt(calories);
    var newId: number = this.childFoodList.length + 1;
    var newFood = new Food(newId, name, meal, details, calorieInt);
    this.newFoodSender.emit(newFood);
  }
}
