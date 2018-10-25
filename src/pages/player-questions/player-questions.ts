import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameOverPage } from '../game-over/game-over';

/**
 * Generated class for the PlayerQuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-questions',
  templateUrl: 'player-questions.html',
})
export class PlayerQuestionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerQuestionsPage');
  }


  goToGameOverPage(){
    this.navCtrl.push(GameOverPage);
  }


}
