import { dishesPlate, dishesPlateListing } from './../../core/dishes-plade-list';
import { dishes, dishesListing } from './../../core/dishes-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  dishes: dishesListing[];
  dishesPlate: dishesPlateListing[];
  constructor() {
    this.dishes = dishes;
    this.dishesPlate = dishesPlate;
   }

  ngOnInit(): void {
  }

}
