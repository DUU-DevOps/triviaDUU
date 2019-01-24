import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { answersToReview } from '../../models/answersToReview';
import firebase from 'firebase';
import { GradingPage } from '../grading/grading';

/**
 * Generated class for the ReviewAnswersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-answers',
  templateUrl: 'review-answers.html',
})
export class ReviewAnswersPage {

  private answersToBeReviewed;
  private round;
  private questionsArr;
  private answersToDisplay = [];
  private accetableAnswersArr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.answersToBeReviewed = this.navParams.get("answersToBeReviewed");
    this.round = this.navParams.get("roundStr");
    this.questionsArr = this.navParams.get("questionsArr")
    this.accetableAnswersArr = this.navParams.get("accetableAnswersArr")
    for (var k = 0; k < this.answersToBeReviewed.length; k++) {
      var ansToReview = new answersToReview();
      ansToReview.teamName = this.answersToBeReviewed[k][2];
      ansToReview.question = this.questionsArr[this.answersToBeReviewed[k][0]];
      ansToReview.questionNum = this.answersToBeReviewed[k][0] +1;
      ansToReview.teamAnswer = this.answersToBeReviewed[k][1];
      ansToReview.accepAnswer = this.accetableAnswersArr[this.answersToBeReviewed[k][0]]
      this.answersToDisplay.push(ansToReview);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradeRoundPage');
  }

  correct(teamName) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var dateformatted = mm + "-" + dd + "-" + yyyy;
 
    var db = firebase.database();
    var dbLoc = (dateformatted + "/teams/" + teamName + "/" + this.round + "score/");
    var currLoc = db.ref(dbLoc);

    currLoc.transaction(function (count) {
      count = count + 1;
      return count;
    });
  }

  submit() {
    var all = true;
    for(var i = 0; i<this.answersToDisplay.length;i++) {
      if(this.answersToDisplay[i].checkedValue=="none") {
        all = false;
      }
    }
    if(all) {
      for(var i = 0; i<this.answersToDisplay.length;i++) {
        if(this.answersToDisplay[i].checkedValue=="correct") {
          this.correct(this.answersToDisplay[i].teamName);
        }
      }
    }
    this.navCtrl.push(GradingPage);


  }




}
