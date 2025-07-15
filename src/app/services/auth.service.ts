import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { doc, getFirestore, setDoc } from '@angular/fire/firestore'; // ✅ modular Firestore

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth,private afAuth: AngularFireAuth) {} // ✅ removed AngularFirestore

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
   signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  async setUserData(user: any, name: string) {
    const db = getFirestore();
    const userRef = doc(db, `users/${user.uid}`);

    const userData = {
      uid: user.uid,
      email: user.email,
      name,
    };

    await setDoc(userRef, userData, { merge: true });
  }
  getAuthState(){
   return this.afAuth.authState;
  }

}
