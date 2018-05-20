import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Operator } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth,  } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

    constructor(public angularFireAuth: AngularFireAuth) {
    }

    login(username: string, password: string, issave: boolean) {
        return this.angularFireAuth.auth
            .setPersistence(issave ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION)
            .then(data => {
                return this.angularFireAuth.auth.signInWithEmailAndPassword(username, password);
            });
    }

    logout() {
        console.log('logout');
        this.angularFireAuth.auth.signOut();
    }

    create(user: any) {
        return this.angularFireAuth.auth
            .createUserWithEmailAndPassword(user.emailName, user.password)
            .then(data => {
                const currentUser = this.angularFireAuth.auth.currentUser;
                currentUser.updateProfile({
                    displayName: user.displayName,
                    photoURL: ''
                });
            });
    }

    getCurrentUser() {
        return this.angularFireAuth.auth.currentUser;
    }
}
