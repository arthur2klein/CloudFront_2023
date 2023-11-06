import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})

export class ConnexionComponent {
	title = 'Se connecter';

	formData = {
		login: '',
		password: '',
	};

	onSubmit() {
		console.log("Submitted: ", this.formData);
	}
}
