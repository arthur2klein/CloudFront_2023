import { Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersI } from 'src/app/shared/models/users-i';
import { Auth, signInWithEmailAndPassword, signOut, User, user } from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	user!: UsersI;
	isLoggedIn: boolean = false;

    firebaseUser!: User;

	authID: {id: string, mdp: string} = {
		id: '',
		mdp: ''
	};

    // Intégration de l'authentification de Firebase
    fire = inject(Auth);

	constructor(
		private http: HttpClient,
		private router: Router,
	) {
        console.log("Creation of the object")
    }

	authentification() {
		// Doit appeler le fichier heidi@heidi64.json sachant que heidi est l'id
		// saisi et heidi64 le mot de passe
		// Ça donnera une concaténation sur la requête http comme celle-ci:
		// `$(this.authID.id}@$(this.authID.mdp).json`
		this.http.get<UsersI>(
			`assets/data/ids/${this.authID.id}@${this.authID.mdp}.json`
		).subscribe(
			{
				next:(ev) => {
					this.user = ev;
					this.router.navigateByUrl('/');
					this.isLoggedIn = true;
				},
				error: (er) => console.log('User not found', er),
                complete:() => console.log('Les événements ont été chargés')
			}
		)
	}

    // Avec Firebase
    fireAuth() {
        signInWithEmailAndPassword(
            this.fire,
            this.authID.id,
            this.authID.mdp
        ).then(infos => {
            this.firebaseUser = infos.user;
            console.log(infos, infos.user);
            this.isLoggedIn = true;
        }).catch(er => console.log(er));
    }

    fireSignOut() {
        signOut(this.fire).then(() => {
            this.isLoggedIn = false;
        }).catch((er) =>{
            console.log(er)
        });
    }
}
