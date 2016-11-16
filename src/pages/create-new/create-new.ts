import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CreateNewPage Page');
  }

}
