import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bg-navbar',
  templateUrl: './bg-navbar.component.html',
  styleUrls: ['./bg-navbar.component.css']
})
export class BgNavbarComponent  {

  constructor(public authService: AuthService) {}

  logout(){
    this.authService.logout();

  }

}
