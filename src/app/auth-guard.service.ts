import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import { RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route, state: RouterStateSnapshot){
    return this.authService.user$.map(user => {
      if(user) return true;
        
      this.router.navigate(['/login'], { queryParams: { 'returnUrl': state.url } });
      return false;

    });  
    
  }
      
  
}