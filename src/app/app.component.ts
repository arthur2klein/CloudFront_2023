import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionnaire-soiree';
  soustitre: string = "sous-titre";
  moustache: string = "Ceci est une moustache";
  liste_moustache: Array<string> = ["Moustache", "Favoris"];

  constructor() {}

  peupleMoustaches() {
	  console.log('Peuple moustache appelé');
  }
}
