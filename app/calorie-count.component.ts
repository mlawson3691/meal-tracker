import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'calorie-count',
  template: `
  <div class='calorieCount'>
    <h1>{{ childDailyCalories }}</h1>
    <h3>Today's Calories</h3>
  </div>
  `
})

export class CalorieCountComponent {
  @Input() childDailyCalories: number;
}
