import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
	title = 'S\'inscrire';

	formData = {
		login: '',
		password: '',
		validation_password: '',
	};

	onSubmit() {
		if (this.formData.password != this.formData.validation_password) {
			console.error("The two password must be identical.");
			return;
		}
	}
}
