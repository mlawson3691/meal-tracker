import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'meal',
  pure: false
})

export class MealPipe implements PipeTransform {
  transform(input: Food[], meal) {
    var output: Food[] = [];
    if (meal === 'All') {
      output = input;
    } else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].meal === meal) {
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}
