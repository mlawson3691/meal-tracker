import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food }             from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <h3>Total Calories Today: ____</h3>
  <div *ngFor="let food of childFoodList" class='well'>
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

  editClicked(foodToEdit) {
    this.editFoodSender.emit(foodToEdit);
  }
}
