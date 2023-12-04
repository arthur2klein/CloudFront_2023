import { Injectable, inject } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { Auth, signInWithEmailAndPassword, signOut, User, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  profil?: UsersI = undefined;

  firebaseUser?: User = undefined;

  authID: {id: string, mdp: string} = {
    id: '',
    mdp: ''
  };

  // Intégration de l'authentification de Firebase
  fire = inject(Auth);

  constructor(
  ) { }

  isLoggedIn() {
    return !(this.firebaseUser === undefined);
  }

  // Avec Firebase
  async fireAuth(): Promise<User|null> {
    return signInWithEmailAndPassword(
      this.fire,
      this.authID.id,
      this.authID.mdp
    ).then(infos => {
      this.firebaseUser = infos.user;
      console.error(infos, infos.user);
      return this.firebaseUser;
    }).catch(er => {
      console.error(er);
      return null;
    });
  }

  fireSignOut() {
    signOut(this.fire).then(() => {
      this.firebaseUser = undefined;
      this.profil = undefined;
    }).catch((er) =>{
      console.log(er)
    });
  }

  async createUser(login: string, password: string): Promise<null | User> {
    return createUserWithEmailAndPassword(
      this.fire,
      login,
      password
    ).then((userInfos) => {
      this.firebaseUser = userInfos.user;
      return this.firebaseUser;
    }).catch((er) => {
      console.log('User not found', er);
      if (
        er.code == "auth/weak-password"
      ) {
        console.log("The password is too weak");
      } else if (
        er.code == "auth/email-already-in-use"
      ) {
        console.log("Email already in use");
      } else if (
        er.code == "auth/invalid-email"
      ) {
        console.log("Invalid email");
      } else {
        console.log("Error when creating the user");
      }
      return null;
    });
  }

  delete_current_user() {
    this.firebaseUser!.delete();
    this.firebaseUser = undefined;
  }
}
