import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'calorie-count',
  template: `
  <h3>Total Calories Today: {{ childDailyCalories }}</h3>
  `
})

export class CalorieCountComponent {
  @Input() childDailyCalories: number;
}
