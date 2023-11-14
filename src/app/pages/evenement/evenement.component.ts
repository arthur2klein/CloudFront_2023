import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementsService } from 'src/app/shared/services/evenements.service';
import { EvenementI } from 'src/app/shared/models/evenement-i';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
	id!: number;
	target!: EvenementI;

	constructor(
		public events: EvenementsService,
		private route:ActivatedRoute
	) {}
	
	ngOnInit(): void {
		this.id = Number(this.route.snapshot.paramMap.get('barbapapa')) || -1;
		if (this.id != -1) {
			this.target = this.events.getEvent(this.id);
		}
	}

}
