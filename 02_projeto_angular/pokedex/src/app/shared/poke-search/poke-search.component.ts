import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.less']
})
export class PokeSearchComponent implements OnInit {

  constructor() { }

  @Output() public eventSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  search(value: string): void {
    this.eventSearch.emit(value);
  }

}
