import { Injectable, inject } from '@angular/core';
import { Firestore, doc, collection, addDoc, setDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersI } from 'src/app/shared/models/users-i';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private store: Firestore) { }

    auth = inject(AuthService);

    creerProfil(profil: UsersI) {
        addDoc(collection(this.store, 'userrs'), {
            email: this.auth.firebaseUser!.email,
            nom: profil.nom,
            prenom: profil.prenom,
            statut: profil.status,
            token: profil.token
        })
    }

    gereDoc(profil: UsersI) {
        const monDoc = doc(this.store, 'users', this.auth.firebaseUser!.uid);
        setDoc(monDoc, {
            email: this.auth.firebaseUser!.email,
            nom: profil.nom,
            prenom: profil.prenom,
            statut: profil.status,
            token: profil.token
        }, {merge: true}); // Si l'objet existe déjà, on le met à jour

    }

    supprimerDoc() {
        const monDoc = doc(this.store, 'users', this.auth.firebaseUser!.uid);
        deleteDoc(monDoc);
    }

}
