import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @Output() public enviarDados = new EventEmitter();

  @Input() contador: any = 0;

  add(): void {
    this.contador = {nome: "renan", idade: 20};
    this.enviarDados.emit(this.contador);
  }

  ngOnInit(): void {
  }

}
