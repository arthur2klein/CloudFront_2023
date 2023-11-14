import { Component, OnDestroy } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { EvenementsService } from 'src/app/shared/services/evenements.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnDestroy {
	filtre: string = '';
	listener: Subscription;

	constructor(public events: EvenementsService) {
		this.listener = this.events.listeEvents$.subscribe(
			{
				next:evs => console.log('From Observable subscription', evs),
				error:er => console.log(er),
				complete:() => console.log('Data synchronized')
			}
		)
	}

	ngOnDestroy(): void {
		this.listener.unsubscribe();
	}
}
