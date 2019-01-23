import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';
import * as firebase from 'firebase/app';
import { ModalController } from 'ionic-angular';
import { GradingPage } from '../grading/grading';

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
    this.navCtrl.push(GradingPage);
    
  } 



  toggleTriviaOn() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var dateformatted = mm + "-" + dd + "-" + yyyy;
    var ref = firebase.database().ref(dateformatted + "/play");
    ref.once("value")
      .then(function(snapshot){
        var play = snapshot.val();
          firebase.database().ref(dateformatted+"/play").set({
            Play: true
          });
        
        

      })  }

  toggleTriviaOff() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var dateformatted = mm + "-" + dd + "-" + yyyy;
    var ref = firebase.database().ref(dateformatted + "/play");
    ref.once("value")
      .then(function(snapshot){
        var play = snapshot.val();
          firebase.database().ref(dateformatted+"/play").set({
            Play: false
          });
        }

      )  
    
    }
    

  





}
