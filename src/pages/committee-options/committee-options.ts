import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';

/**
 * Generated class for the CommitteeOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-committee-options',
  templateUrl: 'committee-options.html',
})
export class CommitteeOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteeOptionsPage');
  }
  goToQuestions() {
    this.navCtrl.push(QuestionsPage);
  }

  goToGrading() {
    
  }
}
