import { Component } from '@angular/core';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent {
	filtre: string = '';
  depart: number = 0;
  pas: number = 4;
  liste_events: Array<EvenementI> = [];

	constructor(public events: EvenementsService) {
    this.events.getAllEvents().then(success => {
      if (success) {
        this.liste_events = this.events.listeEvents;
      }
    });
	}
}
