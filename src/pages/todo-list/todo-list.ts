import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyListsPage } from '../my-lists/my-lists';

/*
  Generated class for the TodoList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html'
})
export class TodoListPage {

  constructor(public navCtrl: NavController,
              public params: NavParams) {}
  
  finalList = {title: "", item: []};

  ionViewDidLoad() {
    console.log('Hello TodoListPage Page');
    // console.log(this.params.data);
    this.finalList = this.params.data.currentTodoList;
    console.log(this.finalList);
    console.log(this.finalList.title);
  }


}

