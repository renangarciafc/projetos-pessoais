import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ng-template [ngIf]="getDados">
    <h1>{{ getDados.nome }}</h1>
    <h2>{{ getDados.idade }}</h2>
  </ng-template>
  <app-login [contador]="addValue" (enviarDados)="setDados($event)"></app-login>
  <app-index></app-index>
  `,
  styleUrls: []
})
export class AppComponent {
  public addValue: number = 12;

  public getDados: {nome: string, idade: number} | undefined = undefined;

  public setDados(event: any) {
    this.getDados = event;
  }
}
