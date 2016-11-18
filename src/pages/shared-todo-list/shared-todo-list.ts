import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SharedListsPage } from '../shared-lists/shared-lists';

/*
  Generated class for the SharedTodoList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shared-todo-list',
  templateUrl: 'shared-todo-list.html'
})
export class SharedTodoListPage {

  constructor(public navCtrl: NavController,
              public params: NavParams) {}
              
finalSharedList = {title: "", item: []};              

  ionViewDidLoad() {
    console.log('Hello SharedTodoListPage Page');
    this.finalSharedList = this.params.data.currentSharedList;
    console.log(this.finalSharedList);
    console.log(this.finalSharedList.title);
  }

}
