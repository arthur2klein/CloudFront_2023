import { Component } from '@angular/core';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { UsersI } from 'src/app/shared/models/users-i';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent {
	listeEvents: Array<EvenementI> = [
		{
			titre: "Démarrage du cours Angular",
			data: Date.now(),
			places: 22,
			horaires: {debut: "Ce main", fin: "Plus tard"},
		},
	];

}
