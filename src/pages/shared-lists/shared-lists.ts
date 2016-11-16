import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SharedTodoListPage } from '../shared-todo-list/shared-todo-list';

// tabs
import { LandingPage } from '../landing/landing';
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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SharedListsPage Page');
  }

  sharedtodolist() {
    this.navCtrl.push(SharedTodoListPage);
  }
  
  home() {
    this.navCtrl.push(LandingPage);
  }
  
  createNew() {
    this.navCtrl.push(CreateNewPage);
  }
  
}
