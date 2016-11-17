import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

import { SharedTodoListPage } from '../shared-todo-list/shared-todo-list';
import { LandingPage } from '../landing/landing';

// menu
import { LobbyPage } from '../lobby/lobby';
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

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController) {
                this.navCtrl = navCtrl;
              }

  ionViewDidLoad() {
    console.log('Hello SharedListsPage Page');
  }
  
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Go to',
      buttons: [
        {
          text: 'Home',
          role: 'Home',
          handler: () => {
            this.navCtrl.push(LobbyPage);
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

  sharedtodolist() {
    this.navCtrl.push(SharedTodoListPage);
  }
  
  logout() {
    this.navCtrl.push(LandingPage);
  }
  
}
