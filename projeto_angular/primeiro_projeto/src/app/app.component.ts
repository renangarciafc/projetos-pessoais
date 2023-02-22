import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-reactive-forms></app-reactive-forms>
  <!-- <app-food-add></app-food-add>
  <app-food-list></app-food-list> -->
  <!-- <router-outlet></router-outlet> -->
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
