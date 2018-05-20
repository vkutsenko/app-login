import { Component, OnInit } from '@angular/core';

import { User } from '@firebase/auth-types';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;

    constructor(private authService: AuthenticationService) {
        this.currentUser = authService.getCurrentUser();
    }

    ngOnInit() {

    }

    logout() {
        this.authService.logout();
    }
}
