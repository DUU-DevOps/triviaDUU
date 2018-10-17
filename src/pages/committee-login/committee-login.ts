import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';
import { CommitteeOptionsPage } from '../committee-options/committee-options';

/**
 * Generated class for the CommitteeLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-committee-login',
  templateUrl: 'committee-login.html',
})
export class CommitteeLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteeLoginPage');
  }

  goToOptions() {
    this.navCtrl.push(CommitteeOptionsPage);
  }



}
