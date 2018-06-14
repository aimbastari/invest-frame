import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, User } from "angularfire2/auth";

import * as firebase from 'firebase';

@Component({
  selector: 'bg-navbar',
  templateUrl: './bg-navbar.component.html',
  styleUrls: ['./bg-navbar.component.css']
})
export class BgNavbarComponent  {

  user: firebase.User;

  constructor(private fAuth: AngularFireAuth) { 
    //fAuth.authState();
    fAuth.user.subscribe(user => this.user=user);

  }

  ngOnInit() {
  }

  logout(){
    console.log("inisde logout");
    this.fAuth.auth.signOut().then(v => console.log(v));

  }

}
