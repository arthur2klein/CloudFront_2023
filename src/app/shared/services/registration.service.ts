import { Injectable } from '@angular/core';
import {Firestore, addDoc, collection, deleteDoc, getDocs, query, where} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private store: Firestore) {}

  async is_registered(id_user: string, id_event: string): Promise<boolean> {
    const collection_reg = collection(this.store, "registration");
    const q = query(collection_reg, where("id_user", "==", id_user), where("id_event", "==", id_event));
    try {
      const snap = await getDocs(q);
      return !snap.empty;
    } catch (_) {
      return false;
    }
  }

  unregister_event(id_user: string, id_event: string) {
    const reg_col = collection(this.store, 'registration');
    const q = query(reg_col, where("id_user", "==", id_user), where("id_event", "==", id_event));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        deleteDoc(doc.ref)
      })
    });
  }

  register_event(id_user: string, id_event: string) {
    const collection_reg = collection(this.store, "registration");
    return addDoc(collection_reg, {
      id_event: id_event,
      id_user: id_user
    });
  }
}
