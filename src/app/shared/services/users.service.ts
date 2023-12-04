import { Injectable, inject } from '@angular/core';
import { Firestore, doc, collection, addDoc, setDoc, updateDoc, deleteDoc, getDoc, getDocs } from '@angular/fire/firestore';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersI } from 'src/app/shared/models/users-i';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  mapUsers: Map<string, UsersI> = new Map<string, UsersI>();

  constructor(private store: Firestore) { }

  auth = inject(AuthService);

  creerProfil(profil: UsersI, login: string, password: string) {
    this.auth.createUser(login, password).then((_) => {
      const monDoc = doc(this.store, 'users', this.auth.firebaseUser!.uid);
      setDoc(monDoc, {
        email: this.auth.firebaseUser!.email,
        nom: profil.nom,
        prenom: profil.prenom,
        statut: profil.statut,
        token: profil.token
      })
    })
  }

  delete_current_user() {
    this.supprimerDoc(this.auth.firebaseUser!.uid);
    this.auth.profil = undefined;
    this.auth.delete_current_user();
  }

  gereDoc(profil: UsersI) {
    const monDoc = doc(this.store, 'users', this.auth.firebaseUser!.uid);
    setDoc(monDoc, {
      email: this.auth.firebaseUser!.email,
      nom: profil.nom,
      prenom: profil.prenom,
      statut: profil.statut,
      token: profil.token
    }, {merge: true}); // Si l'objet existe déjà, on le met à jour
  }

  async lireDoc(): Promise<null | UsersI> {
    const monDoc = doc(this.store, 'users', this.auth.firebaseUser!.uid);
    const my_doc = getDoc(monDoc);
    return my_doc.then((doc) => {
      return doc.data() as UsersI
    }).catch((er) => {
      console.log(er);
      return null;
    });
  }

  modifierDoc(profil: UsersI) {
    const monDoc = doc(this.store, 'users', this.auth.firebaseUser!.uid);
    updateDoc(monDoc, {
      email: this.auth.firebaseUser!.email,
      nom: profil.nom,
      prenom: profil.prenom,
      statut: profil.statut,
      token: profil.token
    });
  }

  supprimerDoc(id: string) {
    const monDoc = doc(this.store, 'users', id);
    deleteDoc(monDoc);
  }

  getAllUsers() {
    this.mapUsers = new Map<string, UsersI>();
    getDocs(collection(this.store, 'users'))
    .then((us) => {
      us.forEach(u => {
        this.mapUsers.set(u.id, u.data() as UsersI);
      })
    });
  }

  has_admin_right(): boolean {
    if (this.auth.profil == undefined) {
      return false;
    }
    return this.auth.profil.statut == "superadmin";
  }

  has_orga_right(): boolean {
    if (this.auth.profil == undefined) {
      return false;
    }
    return this.auth.profil.statut == "superadmin" ||
      this.auth.profil.statut == "organisateur";
  }

  change_role(id: string, value: string) {
    const monDoc = doc(this.store, 'users', id);
    updateDoc(monDoc, {
      statut: value,
    });
  }
}
