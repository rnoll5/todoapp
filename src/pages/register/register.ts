import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';

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

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }

    register() {
    this.navCtrl.push(LobbyPage);
  }
  
    user = {}; 
    
  signupForm = function(form) { 
    if(form.invalid) return alert("Please complete the form before proceeding.");
  }

}
