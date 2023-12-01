import { Component } from '@angular/core';
import {EvenementI} from 'src/app/shared/models/evenement-i';
import {EvenementsService} from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-orga-events',
  templateUrl: './orga-events.component.html',
  styleUrls: ['./orga-events.component.css']
})
export class OrgaEventsComponent {
  date: Date = new Date();
  form_event: EvenementI = {
    titre: '',
    date: 0,
    horaire: {
      debut: "",
      fin: "",
    },
    places: 0,
    info: ''
  };

  constructor(public events: EvenementsService) { }

  onSubmit() {
    this.form_event.date = this.date.getTime();
    this.events.createEvent(this.form_event);
  }

}
