import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from './../_services/authentication.service';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.authService
            .create(this.model)
            .then(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                })
            .catch(
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
