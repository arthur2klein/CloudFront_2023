import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})

export class ConnexionComponent {
  constructor(public auth: AuthService, public users: UsersService, private snackBar: MatSnackBar) {}

  title = 'Se connecter';

  onSubmit() {
    this.auth.fireAuth().then(() => {
      this.users.lireDoc().then((user_or_null) => {
        if (user_or_null != null) {
          this.auth.profil = user_or_null;
        }
        console.log("Lecture du doc: ", this.auth.profil);
      }).catch(er => {
        console.error("Could not get the user profil in the database");
        this.openSnackBar("Authentification failed", 'Close');
      });
    }).catch(er => {
      console.error("User not found")
      this.openSnackBar(er.message, 'Close');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
