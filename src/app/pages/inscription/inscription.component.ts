import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UsersI } from 'src/app/shared/models/users-i';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  title = 'S\'inscrire';

  formData = {
    nom: '',
    prenom: '',
    email: '',
    infos: '',
    token: '',
    statut: 'user',
    password: '',
    validation_password: '',
  };

  constructor(public auth: AuthService, public users: UsersService) {}

  onSubmit() {
    if (this.formData.password != this.formData.validation_password) {
      console.error("The two password must be identical.");
      return;
    }
    this.users.creerProfil(
      this.formData as UsersI,
      this.formData.email,
      this.formData.password
    );
  }
}
