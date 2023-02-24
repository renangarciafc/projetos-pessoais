import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormQuestionsComponent } from 'src/shared/components/form-questions/form-questions.component';
import { QuestionsComponent } from 'src/shared/components/questions/questions.component';
//Guards
import { CanActiveGuard } from './can-active.guard';

const routes: Routes = [
  {path: '', component: QuestionsComponent},
  {path: 'questions', component: QuestionsComponent, canActivate: [CanActiveGuard]},
  {path: 'form', component: FormQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
