import { CustomiseProfilePage } from './../customise-profile/customise-profile';
import { AuthService } from './../../services/auth.service';
import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
  }

  customiseProfile() {
    this.navCtrl.push(CustomiseProfilePage);
  }

  logOut() {
    this.auth.logOut();
    this.navCtrl.push(LoginPage);
  }
}
