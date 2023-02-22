import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//components
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

// Módulos angular material

import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent,
    IndexComponent,
    FoodListComponent,
    FoodAddComponent,
    FormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    IndexComponent,
    FoodListComponent,
    FoodAddComponent,
    FormsComponent,
    ReactiveFormsComponent
  ]
})
export class SharedModule { }
