import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';
import { AppComponent }      from './app.component';
import { FoodListComponent } from './food-list.component';
import { NewFoodComponent }  from './new-food.component';
import { EditFoodComponent }  from './edit-food.component';
import { CaloriesPipe }  from './calories.pipe';

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
    CaloriesPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
