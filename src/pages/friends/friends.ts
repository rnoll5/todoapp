import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

/*
  Generated class for the Friends page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {
    friends: any [] = [{
    "id": 1,
    "name": "Woody"
  }, {
    "id": 2,
    "name": "Buzz"
  }, {
    "id": 3,
    "name": "Bo Peep"
  }, {
    "id": 4,
    "name": "Mr. Piggy"
  }, {
    "id": 5,
    "name": "Andy"
  }]
  
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello FriendsPage Page');
  }

    showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Friend Request',
      message: "Enter the registered email of the friend you would like to request",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  
}
