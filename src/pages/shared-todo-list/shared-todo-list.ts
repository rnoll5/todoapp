import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SharedTodoListPage Page');
  }

}
