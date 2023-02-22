import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-questions',
  templateUrl: './form-questions.component.html',
  styleUrls: ['./form-questions.component.less']
})
export class FormQuestionsComponent implements OnInit {

  constructor() { }

  // Variavel responsavel por setar o nome do usuario
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  init_form: boolean = false;

  errorName: boolean = false;

  getErrorMessage(): any {
    if (this.name.valid) {
      if (this.name.value?.split(' ').length === 2) {
        return "Informe um sobrenome válido"
      }
    }
    else {
      return "Informe um nome válido"
    }
  }

  initForm(): void {
    if (this.name.valid) {
      this.init_form = true;
    }
    else {
      this.errorName = true;
      setTimeout(() => {
        this.errorName = false;
      }, 3000);
    }
  }

  // ---------------------------- Segunda tela do formulário -----------------------------------------

  futebol: boolean = false;
  basquete: boolean = false;
  artesMarciais: boolean = false;
  atletismo: boolean = false;
  academia: boolean = false;
  corrida: boolean = false;
  volei: boolean = false;
  spinning: boolean = false;
  crossFit: boolean = false;


  ngOnInit(): void {
  }

}
