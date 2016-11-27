import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, MenuController } from 'ionic-angular';

import { SharedTodoListPage } from '../shared-todo-list/shared-todo-list';
import { LandingPage } from '../landing/landing';

// menu
import { LobbyPage } from '../lobby/lobby';
import { MyListsPage } from '../my-lists/my-lists';
import { FriendsPage } from '../friends/friends';
import { CreateNewPage } from '../create-new/create-new';

/*
  Generated class for the SharedLists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shared-lists',
  templateUrl: 'shared-lists.html'
})
export class SharedListsPage {
    mySharedLists: any [] = [{
    "id": 1,
    "title": "Grocery List",
    "item": ["apples", "carrots", "bread"]
  }, {
    "id": 2,
    "title": "Errands",
    "item": ["dry cleaning", "pharmacy", "post office"]
  }, {
    "id": 3,
    "title": "Guest List", 
    "item": ["Nemo", "Marlin", "Dory"]
  }]

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public menuCtrl: MenuController,
              public params: NavParams) {
                this.navCtrl = navCtrl;
              }

  ionViewDidLoad() {
    console.log('Hello SharedListsPage Page');
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
 
  home() {
    this.navCtrl.setRoot(LobbyPage);
  }
  
  myLists() {
    this.navCtrl.push(MyListsPage);
  }
  
  friends() {
    this.navCtrl.push(FriendsPage);
  }
  
  newlist() {
    this.navCtrl.push(CreateNewPage);
  }

// main buttons

  sharedtodolist(sharedList) {
    this.navCtrl.push(SharedTodoListPage, {currentSharedList: sharedList});
  }
  
  logout() {
    this.navCtrl.setRoot(LandingPage);
  }
  
}
