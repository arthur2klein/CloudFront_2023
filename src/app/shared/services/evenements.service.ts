import { Injectable } from '@angular/core';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  listeEvents: Array<EvenementI> = [];
  listeEvents$: BehaviorSubject<Array<EvenementI>> =
	  new BehaviorSubject([] as Array<EvenementI>);

  constructor(private http: HttpClient) {
	  this.getEvenements();
  }

  getEvenements() {
	  this.http.get<Array<EvenementI>>('assets/data/evenements.json').subscribe(
		  {
			  next:(ev) => {
				  this.listeEvents = ev;
				  this.listeEvents$.next(ev);
			  },
			  error: (er) => console.log(er),
				  complete:() => console.log('Les événements ont été chargés')
		  }
	  )
  }
  getEvent(id: number): Observable<EvenementI> {
	  return this.listeEvents$.pipe(map(data => {
		  return data.filter(d => d.date == id) [0];
	  }));
  }
}
