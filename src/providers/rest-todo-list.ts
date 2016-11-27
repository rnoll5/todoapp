import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestTodoList provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestTodoList {

  constructor(public http: Http) {
    console.log('Hello RestTodoList Provider');
  }
  
  baseUrl = 'https://todo-strongloop-backend-rnoll.c9users.io/api/'
  path = 'ToDoList/'

  save(todoList) {
    return this.http.post(
      this.baseUrl + this.path, todoList
    );
  }

}
