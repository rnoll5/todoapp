import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

import { TodoListPage } from '../todo-list/todo-list';
import { LandingPage } from '../landing/landing';

// menu
import { LobbyPage } from '../lobby/lobby';
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

// export class MyListsComponent {


export class MyListsPage {
  myLists: any [] = [{
    "id": 1,
    "title": "Shopping List",
    "item": ["toothpaste", "socks", "paper towels"]
  }, {
    "id": 2,
    "title": "Chores",
    "item": ["dishes", "laundry", "vacuum"]
  }, {
    "id": 3,
    "title": "Tasks",
    "item": ["conference call", "board meeting", "payroll"]
  }]  

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public actionSheetCtrl: ActionSheetController,
              public params: NavParams) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello MyListsPage Page');
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

  todolist(myList) {
    this.navCtrl.push(TodoListPage, {currentTodoList: myList});
  }
  
  logout() {
    this.navCtrl.push(LandingPage);
  }
  
}
