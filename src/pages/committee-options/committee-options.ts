import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';
import * as firebase from 'firebase/app';
import { ModalController } from 'ionic-angular';
import { StarttriviaPage } from '../starttrivia/starttrivia';
import { EndtriviaPage } from '../endtrivia/endtrivia';

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
  public date:string;
  public start:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteeOptionsPage');
  }
  goToQuestions() {
    this.navCtrl.push(QuestionsPage);
  }

  goToGrading() {
    
  } 

  toggleTrivia(){
    this.date = this.navParams.get("dot");
    this.start = this.navParams.get("start");
    var database = firebase.database();
    database.ref(this.date).set({
      Start:this.start
    });
  }

  presentProfileModalStart() {
    let profileModal = this.modalCtrl.create(EndtriviaPage, {start:true});
    profileModal.present();
  }

  presentProfileModalEnd() {
    let profileModal = this.modalCtrl.create(EndtriviaPage,{start:false});
    profileModal.present();
  }

  


  // startTrivia() {
  //   private date : string = await this.getDate();
  //   var database = firebase.database();
  //   database.ref().set({


  // }


}
