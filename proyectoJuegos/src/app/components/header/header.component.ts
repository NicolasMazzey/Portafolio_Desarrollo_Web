import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = "Pagina de Juegos";
  logo = "https://pipedream.com/s.v0/app_1gKhAk/logo/orig"

  @Output() searchEvent = new EventEmitter<string>();

  onSubmit(searchTerms: string) {
    this.searchEvent.emit(searchTerms);
  }
}
