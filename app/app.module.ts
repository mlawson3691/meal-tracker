import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list.component';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import { CalorieCountComponent } from './calorie-count.component';
import { CaloriesPipe } from './calories.pipe';
import { MealPipe } from './meal.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FoodListComponent,
    NewFoodComponent,
    EditFoodComponent,
    CalorieCountComponent,
    CaloriesPipe,
    MealPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
