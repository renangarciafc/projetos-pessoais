import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './components/questions/questions.component';
import { FormsModule } from '@angular/forms';
import { FormQuestionsComponent } from './components/form-questions/form-questions.component';

// Módulos angular-material
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    QuestionsComponent,
    FormQuestionsComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    QuestionsComponent
  ]
})
export class SharedModule { }
