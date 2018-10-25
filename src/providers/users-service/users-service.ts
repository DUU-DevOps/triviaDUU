import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the UsersServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersServiceProvider {
  public fireAuth: any;
  constructor(public afAuth: AngularFireAuth) {
    this.fireAuth = firebase.auth();
  }
  
  loginUser(email: string, password: string): any {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })  }


}
