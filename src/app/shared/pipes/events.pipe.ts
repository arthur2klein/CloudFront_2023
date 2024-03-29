import { Pipe, PipeTransform } from '@angular/core';

import { EvenementI } from '../models/evenement-i';

@Pipe({
  name: 'events'
})
export class EventsPipe implements PipeTransform {

  transform(listeEvents: Array<EvenementI>, filtre: string): Array<EvenementI> {
	  filtre = filtre.toLowerCase();
	  return listeEvents.filter(
		  event => (
			  event.titre.toLowerCase().indexOf(filtre) > -1 ||
			  event.horaire.debut.toLowerCase().indexOf(filtre) > -1 ||
			  event.horaire.fin.toLowerCase().indexOf(filtre) > -1
		 )
	  );
  }

}
