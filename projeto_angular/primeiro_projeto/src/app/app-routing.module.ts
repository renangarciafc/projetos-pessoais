import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../shared/login/login.component';
import { IndexComponent } from 'src/shared/index/index.component';
import { FormsComponent } from 'src/shared/forms/forms.component';
import { ReactiveFormsComponent } from 'src/shared/reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'index', component: IndexComponent},
  {path: 'form', component: FormsComponent},
  {path: 'reactive-form', component: ReactiveFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
