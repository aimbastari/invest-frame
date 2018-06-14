import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IF';

  constructor(private authSerivce: AuthService, private router: Router){
    this.authSerivce.user$.subscribe( user => {
      if(user){
        this.router.navigateByUrl(localStorage.getItem("returnUrl"));
      }
    });

  }  

}
