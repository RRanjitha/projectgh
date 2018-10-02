import { Component, OnInit } from '@angular/core';
import { LoginService, Principal } from 'app/core';
import { JhiEventManager } from 'ng-jhipster';
import { Router } from '@angular/router';

@Component({
    selector: 'jhi-login',
    templateUrl: 'login.component.html',
    styles: ['login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    account: Account;

    constructor(
        private loginService: LoginService,
        private principal: Principal,
        private eventManager: JhiEventManager,
        private router: Router
    ) {
        console.log('Testing login');
    }

    ngOnInit() {
        console.log('1. Inside ngOnInit method');
        this.principal.identity().then(account => {
            console.log('1.1 Inside principal service');
            this.account = account;
            console.log(this.account);
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        console.log('2. after login authenticationSuccess');
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
                console.log(this.account);
                this.router.navigateByUrl('/dashboard');
            });
        });
    }

    isAuthenticated() {
        console.log('3. is Authendicated');
        return this.principal.isAuthenticated();
    }

    login() {
        console.log('4. By click login button');
        this.router.navigateByUrl('/dashboard');
        this.loginService.login();
    }

    logout() {
        this.loginService.logout();
    }
}
