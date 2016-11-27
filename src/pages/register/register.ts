import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';

import { RestTodoUsers } from '../../providers/rest-todo-users';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              public TodoUsersRest: RestTodoUsers) {
    // this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }

  //   register() {
  //   this.navCtrl.push(LobbyPage);
  // }
  
    user = {}; 
    
  signupForm(form) { 
    if(form.invalid) return alert("Please complete the form before proceeding.");
    
    this.TodoUsersRest.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      alert("An error has occurred");
    });
  }

}
