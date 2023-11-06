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
			lieu: "Pau",
			date: new Date('2023-11-06T15:11:00'),
			organisateur: {
				nom: "Pépito",
				prenom: "Micolassonne",
				email: "pepito@yahoo.fr",
				status: "admin",
			},
			participants: [],
		},
	];

}
