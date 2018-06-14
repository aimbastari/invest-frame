import { Observable } from 'rxjs-compat/Observable';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  

  constructor(private fAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
    this.user$ = fAuth.authState;
   }

  login(){
    var provider = new firebase.auth.GoogleAuthProvider();
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || ''; 
    localStorage.setItem('returnUrl', returnUrl);

    this.fAuth.auth.signInWithRedirect(provider);

  }

  logout(){
    this.fAuth.auth.signOut();
    this.router.navigateByUrl('');
  }
}
