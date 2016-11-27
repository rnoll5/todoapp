import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { MyListsPage } from '../my-lists/my-lists';
import { SharedListsPage } from '../shared-lists/shared-lists';
import { TodoListPage } from '../todo-list/todo-list';

import { RestTodoList } from '../../providers/rest-todo-list';
/*
  Generated class for the CreateNew page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-new',
  templateUrl: 'create-new.html'
})
export class CreateNewPage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public TodoListRest: RestTodoList) {}

  ionViewDidLoad() {
    console.log('Hello CreateNewPage Page');
  }
    public todoList = [];
    // public todoItems = [];
    todos = {};
    title = "";
    
    consoleLog = console.log;
    onPageDidEnter() {
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if(!this.todoList) {
            this.todoList = [];
        }
        // this.todoItem = "";
    }
 
    delete(index: number) {
        this.todoList.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(this.todoList));
    }
    
    add() {
        // if(this.todoItem != "") {
            this.todoList.push({
              name: ""
            });
            localStorage.setItem("todos", JSON.stringify(this.todoList));
            // this.navCtrl.pop();
        // }
    }
    
    saveShare() {
    let prompt = this.alertCtrl.create({
      title: 'Share my list with a friend',
      message: "Enter the registered email of your friend",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
    this.navCtrl.push(SharedListsPage);
  }
  
    saveList() {
    this.TodoListRest.save(this.todoList)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.getItem('userID');
      window.localStorage.setItem('todoList', res.todoList);
      this.navCtrl.setRoot(TodoListPage);
    }, err => {
      alert("An error has occurred");
    });
  }
    
  
}
