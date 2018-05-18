
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Operator } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable()
export class AuthenticationService {
    constructor(public angularFireAuth: AngularFireAuth) { }

    login(username: string, password: string) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(username, password);

    }

    logout() {
        this.angularFireAuth.auth.signOut();
        localStorage.removeItem('currentUser');
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
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}
