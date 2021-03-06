import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

import { of as ObservableOf, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  uid = this.fAuth.authState.pipe(
    map((authState) => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    })
  );
  isAdmin: Observable<boolean> = this.uid.pipe(
    switchMap((uid) => {
      if (!uid) {
        return ObservableOf(false);
      } else {
        return this.db.object<boolean>('/admin/' + uid).valueChanges();
      }
    })
  );

  constructor(
    private fAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private db2: AngularFirestore
  ) {}

  logar(email?, senha?) {
    console.log('LOGANDO!');
    // this.fAuth.signInWithPopup(new auth.GoogleAuthProvider());
    this.fAuth.signInWithEmailAndPassword(email, senha);
    // this.fAuth.createUserWithEmailAndPassword(email, senha).catch(function (error) {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorCode, ' - ', errorMessage);
    // });
  }

  deslogar() {
    console.log('DESLOGANDO!');
    this.fAuth.signOut();
  }
}
