import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from 'src/app/modules/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  public foodList: Array<FoodList> = [];

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => error
    );

    this.foodListService.emitEvent.subscribe(
      response => {
        alert(`Você adicionou o item - ${response.name}`);
        return this.foodList.push(response);
      }
    );
  }

  foodListDeleteId(id: number) {
    this.foodListService.foodListDelete(id).subscribe(
      res => this.foodList.forEach(food => {
        if (food.id === id) {
          this.foodList = this.foodList.filter(
            item => {
              return id !== item.id
            }
          )
        }
      }),
      error => error
    )
  }

  foodListEdit(value: string, id: number) {
    this.foodListService.foodListEdit(value, id).subscribe(
      res => {
        alert(`O item ${id} foi renomeado p/ ${value}`);
        this.foodListService.foodList().subscribe(
          res => this.foodList = res,
          error => error
        )
      },
      error => error
    )
  }

}
