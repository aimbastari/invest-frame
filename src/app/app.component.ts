import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IF';

  constructor(private authSerivce: AuthService, private router: Router, private userService: UserService){
    this.authSerivce.user$.subscribe( user => {
      if(user){
        //Save user to db
        this.userService.save(user);
      
        this.router.navigateByUrl(localStorage.getItem("returnUrl"));
      }
    });

  }  

}
