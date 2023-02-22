import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.less']
})
export class QuestionsComponent implements OnInit {

  constructor(private router: Router) { }

  // Configurando primeira página

  amizade: boolean = false;
  relacionamento: boolean = false;
  error: boolean = false;

  initApp(): void {
    if (this.amizade || this.relacionamento) {
      this.router.navigate(['form']);
    }else {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      },3000);
    }
  }

  ngOnInit(): void {
  }

}
