import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  navBarCollapsed = true;

  constructor(private authService: AuthService, private route: Router) {

  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.route.navigate(['home']);
    this.authService.logout();
  }

  toggleNav(closeOnly?: boolean) {
    if (closeOnly) {
      this.navBarCollapsed = true;
    } else {
      this.navBarCollapsed = !this.navBarCollapsed;
    }
  }

}
