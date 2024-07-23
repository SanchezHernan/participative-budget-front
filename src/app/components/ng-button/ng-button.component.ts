import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ng-button',
  standalone: true,
  imports: [],
  templateUrl: './ng-button.component.html',
  styleUrl: './ng-button.component.css'
})
export class NgButtonComponent {

  @Input() username = '';
  @Output() addFavouriteEvent = new EventEmitter<string>(); //evento para pasar info al modulo padre

  games = [
      {
        id: 1,
        name: 'Dark Souls'
      },
      {
        id: 2,
        name: 'Elden Ring'
      },
      {
        id: 3,
        name: 'Bloodborne'
      },
  ]

  //funcion para pasar info al modulo padre
  fav(gameName: string) {
    this.addFavouriteEvent.emit(gameName);
  }

}
