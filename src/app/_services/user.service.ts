import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../_models/user';



@Injectable()
export class UserService {
    constructor(public auth: AngularFireAuth) { }

}

