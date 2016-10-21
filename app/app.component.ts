import { Component } from '@angular/core';
import { Food }      from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <h1>Meal Tracker</h1>
    <food-list
      [childFoodList]="masterFoodList"
    ></food-list>
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
}
