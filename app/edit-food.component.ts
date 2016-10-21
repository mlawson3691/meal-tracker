import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food',
  template: `
  <div *ngIf="foodToEdit" class='well'>
    <button (click)="doneClicked()" class='btn pull-right'>X</button>
    <h3>Edit This Food</h3>
    <div class='form-group'>
      <label>Name:</label>
      <input [(ngModel)]="foodToEdit.name" class='form-control'>
    </div>
    <div class='form-group'>
      <label>Details:</label>
      <input [(ngModel)]="foodToEdit.details" class='form-control'>
    </div>
    <div class='form-group'>
      <label>Calories:</label>
      <input [(ngModel)]="foodToEdit.calories" class='form-control'>
    </div>
  </div>
  `
})

export class EditFoodComponent {
  @Input() foodToEdit: Food;
  @Output() doneEditSender = new EventEmitter();

  doneClicked(){
    this.doneEditSender.emit();
  }
}
