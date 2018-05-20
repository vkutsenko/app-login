import { map } from 'rxjs/operators';
import { AuthenticationService } from './../_services/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, public angularFireAuth: AngularFireAuth, private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.angularFireAuth.user.pipe(map(data => {
            if (data) {
                return true;
            } else {
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false;
            }
        }));

    }
}

