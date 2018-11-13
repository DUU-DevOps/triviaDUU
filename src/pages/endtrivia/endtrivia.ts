import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommitteeOptionsPage } from '../committee-options/committee-options';
import * as firebase from 'firebase/app';

/**
 * Generated class for the EndtriviaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-endtrivia',
  templateUrl: 'endtrivia.html',
})
export class EndtriviaPage {
  public dot:string;
  public start:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndtriviaPage');
  }

  endTrivia(){

    this.start = this.navParams.get("start");
    this.navCtrl.push(CommitteeOptionsPage, {dot:this.dot, start:this.start});
  }

}
