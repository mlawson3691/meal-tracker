import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  template: `
  <h3>Add a Food</h3>
  <div class='well'>
    <div class='form-group'>
      <label>Name:</label>
      <input #name class='form-control'>
    </div>
    <div class='form-group'>
      <label>Details:</label>
      <input #details class='form-control'>
    </div>
    <div class='form-group'>
      <label>Calories:</label>
      <input #calories class='form-control'>
    </div>
    <button
      (click)="addClicked(name.value, details.value, calories.value);
      name.value='';
      details.value='';
      calories.value='';
    ">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  addClicked(name: string, details: string, calories: string){
    var calorieInt: number = parseInt(calories);
    var newFood = new Food(name, details, calorieInt);
    this.newFoodSender.emit(newFood);
  }
}
