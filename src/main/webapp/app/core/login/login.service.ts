import { Injectable } from '@angular/core';

import { Principal } from '../auth/principal.service';
import { AuthServerProvider } from '../auth/auth-session.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(private principal: Principal, private authServerProvider: AuthServerProvider) {}

    login() {
        console.log('location.port= ', location.port);
        console.log('location.host= ', location.hostname);
        let port = location.port ? ':' + location.port : '';
        if (port === ':9000') {
            port = ':8080';
        }
        console.log('port= ', port);

        location.href = '//' + location.hostname + port + '/login';

        console.log('href= ', location.href);
    }

    logout() {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    }
}
