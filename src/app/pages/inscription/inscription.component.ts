import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
	title = 'S\'inscrire';

	formData = {
		login: '',
		nom: '',
		prenom: '',
		password: '',
		validation_password: '',
	};

	constructor(public auth: AuthService) {}

	onSubmit() {
		if (this.formData.password != this.formData.validation_password) {
			console.error("The two password must be identical.");
			return;
		}
        this.auth.createUser(
            this.formData.login,
            this.formData.password
        );
	}
}
