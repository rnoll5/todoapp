import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { MyApp } from './app.component';

import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { MyListsPage } from '../pages/my-lists/my-lists';
import { SharedListsPage } from '../pages/shared-lists/shared-lists';
import { TodoListPage } from '../pages/todo-list/todo-list';
import { SharedTodoListPage } from '../pages/shared-todo-list/shared-todo-list';
import { CreateNewPage } from '../pages/create-new/create-new';
import { ProfilePage } from '../pages/profile/profile';
import { FriendsPage } from '../pages/friends/friends';

// rest services
import { RestTodoUsers } from '../providers/rest-todo-users';
import { RestTodoList } from '../providers/rest-todo-list';

const injections = [
  MyApp,
  LandingPage,
  LoginPage,
  RegisterPage,
  LobbyPage,
  MyListsPage,
  SharedListsPage,
  TodoListPage,
  SharedTodoListPage,
  CreateNewPage,
  ProfilePage,
  FriendsPage
  
]
@NgModule({
  declarations: injections,
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [RestTodoUsers, RestTodoList]
})
export class AppModule {}
