import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayerQuestionsPage } from '../player-questions/player-questions';

/**
 * Generated class for the LetsplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-letsplay',
  templateUrl: 'letsplay.html',
})
export class LetsplayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LetsplayPage');
  }

  goToPlayerQuestionsPage(){
    this.navCtrl.push(PlayerQuestionsPage);
  
  }

  ngOnInit(){
    setTimeout(() => {

        this.navCtrl.push(PlayerQuestionsPage);
    }, 2000);
}




}
