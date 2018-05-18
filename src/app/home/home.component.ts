import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
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
}
