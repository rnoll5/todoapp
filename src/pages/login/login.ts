import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';

import { RestTodoUsers } from '../../providers/rest-todo-users';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public TodoUsersRest: RestTodoUsers) {
    // this.navCtrl = navCtrl;
  }
  
  user={};

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  //   login() {
  //   this.navCtrl.setRoot(LobbyPage);
  // }
  

  signinForm(form) { 
    if(form.invalid) return alert("Please complete the form before proceeding.");
    
    this.TodoUsersRest.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      alert("An error has occurred");
    });
  }

}
