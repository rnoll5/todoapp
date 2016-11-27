import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, MenuController } from 'ionic-angular';

import { LandingPage } from '../landing/landing';
import { MyListsPage } from '../my-lists/my-lists';
import { SharedListsPage } from '../shared-lists/shared-lists';

// menu
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
              public menuCtrl: MenuController) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
  }
  
  // menu 
   openMenu() {
   this.menuCtrl.open();
 }
 
  closeMenu() {
   this.menuCtrl.close();
 }

 toggleMenu() {
   this.menuCtrl.toggle();
 }
 
  friends() {
    this.navCtrl.push(FriendsPage);
  }
  
  settings() {
    this.navCtrl.push(ProfilePage);
  }
  
  newlist() {
    this.navCtrl.push(CreateNewPage);
  }

// main buttons
  logout() {
    this.navCtrl.setRoot(LandingPage);
  }
  
  mylists() {
    this.navCtrl.setRoot(MyListsPage);
  }
  
  sharedlists() {
    this.navCtrl.setRoot(SharedListsPage);
  }
  
}
