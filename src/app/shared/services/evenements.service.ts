import { Injectable } from '@angular/core';
import { Firestore, doc, collection, addDoc, setDoc, updateDoc, deleteDoc, getDoc, getDocs } from '@angular/fire/firestore';
import { EvenementI } from 'src/app/shared/models/evenement-i';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  listeEvents: Array<EvenementI> = [];

  constructor(private store: Firestore) {
  }

  async getAllEvents(): Promise<boolean> {
      this.listeEvents = [];
      return getDocs(collection(this.store, 'events'))
      .then((us) => {
          us.forEach(u => {
              let data = u.data();
              data['id'] = u.id;
              this.listeEvents.push(data as EvenementI);
          })
          return true;
      }).catch(er => {
        console.log(er);
        return false;
      });
  }

  async getEvent(id: string): Promise<EvenementI|null> {
    const my_doc = getDoc(doc(this.store, 'events', id));
    return my_doc.then(
      (ev) => {
        let data = ev.data();
        data!['id'] = ev.id;
        return data as EvenementI;
      }).catch(er => {
        console.log(er);
        return null;
      });
  }

  createEvent(event: EvenementI) {
    const event_without_id = { ...event};
    const maCollection = collection(this.store, 'events');
    addDoc(maCollection, event_without_id);
  }
}
