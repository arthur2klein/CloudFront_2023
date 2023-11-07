import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  session_data: any = [];

  authID: {id: string, mdp: string} = {
	  id: '',
	  mdp: ''
  };

  constructor(private http: HttpClient) { }
  authentification(id: string, mdp: string) {
	  //Doit appeler le fichier heidi@heidi64.json sachant que heidi est l'id saisi et haidi64 le mot de passe
	  //Ça donnera une concaténation sur la requête http comme celle-ci: `$(this.authId.id}@$(this.authID.mdp).json`
	  this.http.get(`assets/data/ids/${id}@${mdp}.json`).subscribe(
		  {
			  next:(ev) => {
				  console.log("Données reçues du JSON", ev);
				  this.session_data = ev;
				  this.authID = {
					  id: id,
					  mdp: mdp
				  };
			  },
			  error: (er) => console.log('User not found'),
			  complete:() => console.log('Les événements ont été chargés')
		  }
	  )
  }
}
