import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

import { LandingPage } from '../landing/landing';
import { MyListsPage } from '../my-lists/my-lists';
import { SharedListsPage } from '../shared-lists/shared-lists';

import { FriendsPage} from '../friends/friends';
import { ProfilePage } from '../profile/profile';
import { CreateNewPage } from '../create-new/create-new';

/*
  Generated class for the Lobby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})
export class LobbyPage {

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
  }
  
    presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Go to',
      buttons: [
        {
          text: 'Friends',
          role: 'Friends',
          handler: () => {
            this.navCtrl.push(FriendsPage);
          }
        },{
          text: 'Settings',
          handler: () => {
            this.navCtrl.push(ProfilePage);
          }
        },{
          text: 'New List',
          role: 'newlist',
          handler: () => {
            this.navCtrl.push(CreateNewPage);
          }
        }
      ]
    });
    actionSheet.present();
  }
  

  logout() {
    this.navCtrl.setRoot(LandingPage);
  }
  
  mylists() {
    this.navCtrl.push(MyListsPage);
  }
  
  sharedlists() {
    this.navCtrl.push(SharedListsPage);
  }
  
}
