import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: string = 'Wybierz produkt';

  products = [
    { id: 1, name: 'Produkt  1', tooltip: 'Najlepszy Produkt 1', selected: false },
    { id: 2, name: 'Produkt  2', tooltip: 'Najlepszy Produkt 2', selected: false },
    { id: 3, name: 'Produkt  3', tooltip: 'Najlepszy Produkt 3', selected: false },
    { id: 4, name: 'Produkt  4', tooltip: 'Najlepszy Produkt 4', selected: false },
    { id: 5, name: 'Produkt  5', tooltip: 'Najlepszy Produkt 5', selected: false },
    { id: 6, name: 'Produkt  6', tooltip: 'Najlepszy Produkt 6', selected: false },
  ];
}
