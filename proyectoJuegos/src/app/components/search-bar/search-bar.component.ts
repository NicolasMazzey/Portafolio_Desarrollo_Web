import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  constructor() {}

  @Output() searchEvent = new EventEmitter<string>();

  onSubmit(searchTerms: string) {
    this.searchEvent.emit(searchTerms);
  }
}
