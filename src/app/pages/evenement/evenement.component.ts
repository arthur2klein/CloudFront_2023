import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementsService } from 'src/app/shared/services/evenements.service';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
	id!: string;
	target!: EvenementI;
  is_registered: boolean = false;

	constructor(
		public events: EvenementsService,
		private route:ActivatedRoute,
    private auth: AuthService,
    private reg: RegistrationService
	) {
	}
	
	ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get('barbapapa') || '';
		if (this.id == '') {
      return;
    }
    this.events.getEvent(this.id).then(x => {
      if (x == null) {
        console.error("No event");
        return
      }
      this.target = x;
      if (this.auth.firebaseUser != null) {
        this.reg.is_registered(this.auth.firebaseUser.uid, this.id)
        .then((is_registered: boolean) => { this.is_registered = is_registered});
      }
    });
	}

  register() {
    this.reg.register_event(this.auth.firebaseUser!.uid, this.id);
    this.is_registered = true;
  }

  unregister() {
    this.reg.unregister_event(this.auth.firebaseUser!.uid, this.id);
    this.is_registered = false;
  }
}
