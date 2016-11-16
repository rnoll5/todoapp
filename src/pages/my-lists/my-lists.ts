import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TodoListPage } from '../todo-list/todo-list';

// tabs
import { LandingPage } from '../landing/landing';
import { CreateNewPage } from '../create-new/create-new';

/*
  Generated class for the MyLists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-lists',
  templateUrl: 'my-lists.html'
})
export class MyListsPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello MyListsPage Page');
  }

  todolist() {
    this.navCtrl.push(TodoListPage);
  }
  
  home() {
    this.navCtrl.push(LandingPage);
  }
  
  createNew() {
    this.navCtrl.push(CreateNewPage);
  }
}
