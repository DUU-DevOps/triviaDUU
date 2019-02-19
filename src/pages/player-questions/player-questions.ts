import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { GameOverPage } from '../game-over/game-over';
import { playerTriviaNight } from '../../models/playerTriviaNight';
import { PlayerSubmitProvider } from '../../providers/player-submit/player-submit';
import { SubmitsuccessPage } from '../submitsuccess/submitsuccess';

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
  public questiononeroundone: string;
  public answeroneroundone: string;
  public questiontworoundone: string;
  public answertworoundone: string;
  public questionthreeroundone: string;
  public answerthreeroundone: string;
  public questionfourroundone: string;
  public answerfourroundone: string;
  public questionfiveroundone: string;
  public answerfiveroundone: string;
  public questionsixroundone: string;
  public answersixroundone: string;
  public questionsevenroundone: string;
  public answersevenroundone: string;
  public questioneightroundone: string;
  public answereightroundone: string;
  public questionnineroundone: string;
  public answernineroundone: string;
  public questiontenroundone: string;
  public answertenroundone: string;
  public answerbonusroundone: string;

  public questiononeroundtwo: string;
  public answeroneroundtwo: string;
  public questiontworoundtwo: string;
  public answertworoundtwo: string;
  public questionthreeroundtwo: string;
  public answerthreeroundtwo: string;
  public questionfourroundtwo: string;
  public answerfourroundtwo: string;
  public questionfoveroundtwo: string;
  public answerfiveroundtwo: string;
  public questionsixroundtwo: string;
  public answersixroundtwo: string;
  public questionsevenroundtwo: string;
  public answersevenroundtwo: string;
  public questitwoightroundtwo: string;
  public answereightroundtwo: string;
  public questionnineroundtwo: string;
  public answernineroundtwo: string;
  public questiontenroundtwo: string;
  public answertenroundtwo: string;
  public answerbonusroundtwo: string;

  public questiononeroundthree: string;
  public answeroneroundthree: string;
  public questiontworoundthree: string;
  public answertworoundthree: string;
  public questionthreeroundthree: string;
  public answerthreeroundthree: string;
  public questionfourroundthree: string;
  public answerfourroundthree: string;
  public questionfoveroundthree: string;
  public answerfiveroundthree: string;
  public questionsixroundthree: string;
  public answersixroundthree: string;
  public questionsevenroundthree: string;
  public answersevenroundthree: string;
  public questioneightroundthree: string;
  public answereightroundthree: string;
  public questionnineroundthree: string;
  public answernineroundthree: string;
  public questiontenroundthree: string;
  public answertenroundthree: string;
  public answerbonusroundthree: string;

  public roundOneAnswers: Array<String>;
  public triviaData:playerTriviaNight;
  public roundTwoAnswers : Array<String>;
  public roundThreeAnswers : Array<String>;

  public date: string;


  constructor(public playerAnswerService: PlayerSubmitProvider, public loadCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  ionViewWillEnter() {
    const alert = this.alertCtrl.create({
      title: 'Welcome to Trivia!',
      message: 'Please do not close this page during trivia. Feel free to navigate away but make sure to keep this page open.',
      buttons: [
        {
          text: 'Got it!',
        }
      ]
    });
    alert.present();
  }
  async ionViewCanLeave() {
    const shouldLeave = await this.confirmLeave();
    return shouldLeave;
  }
  
  confirmLeave(): Promise<Boolean> {
    let resolveLeaving;
    const canLeave = new Promise<Boolean>(resolve => resolveLeaving = resolve);
    const alert = this.alertCtrl.create({
      title: 'Confirm Leave',
      message: 'Please do not leave the page during trivia!',
      buttons: [
        {
          text: 'Leave Anyway',
          role: 'cancel',
          handler: () => resolveLeaving(true)
        },
        {
          text: 'Okay',
          handler: () => resolveLeaving(false)
        }
      ]
    });
    alert.present();
    return canLeave
  }

goToPlayerSuccessR1() {
  
  this.roundOneAnswers=[
    this.answeroneroundone,
    this.answertworoundone,
    this.answerthreeroundone,
    this.answerfourroundone,
    this.answerfiveroundone,
    this.answersixroundone,
    this.answersevenroundone,
    this.answereightroundone,
    this.answernineroundone,
    this.answertenroundone,
    this.answerbonusroundone,
  ]
  for (var x =0; x<11; x++){
    if (typeof(this.roundOneAnswers[x]) === "undefined"){
      this.roundOneAnswers[x] = "NO-ANSWER-SUBMITTED";
    }
    this.roundOneAnswers[x] = this.roundOneAnswers[x].trim().toLowerCase();
  }
  
  try{
      this.playerAnswerService.playerSubmitAnswers("round1", {
        answers: this.roundOneAnswers,
      }, function(){})
  }
  catch(err){
    console.log(err);
  }
  
  alert("Round One Answers Submitted Successfully!")
}

goToPlayerSuccessR2() {
  this.roundTwoAnswers=[
    this.answeroneroundtwo,
    this.answertworoundtwo,
    this.answerthreeroundtwo,
    this.answerfourroundtwo,
    this.answerfiveroundtwo,
    this.answersixroundtwo,
    this.answersevenroundtwo,
    this.answereightroundtwo,
    this.answernineroundtwo,
    this.answertenroundtwo,
    this.answerbonusroundtwo,
  ]
  for (var x =0; x<11; x++){
    if (typeof(this.roundTwoAnswers[x]) === "undefined"){
      this.roundTwoAnswers[x] = "NO-ANSWER-SUBMITTED";
    }
    this.roundTwoAnswers[x] = this.roundTwoAnswers[x].trim().toLowerCase();
  }
  try{
      this.playerAnswerService.playerSubmitAnswers("round2", {
        answers: this.roundTwoAnswers,
      }, function(){})
  }
  catch(err){
    console.log(err);
  }
  alert("Round Two Answers Submitted Successfully!")
}
goToPlayerSuccessR3() {
  this.roundThreeAnswers=[
    this.answeroneroundthree,
    this.answertworoundthree,
    this.answerthreeroundthree,
    this.answerfourroundthree,
    this.answerfiveroundthree,
    this.answersixroundthree,
    this.answersevenroundthree,
    this.answereightroundthree,
    this.answernineroundthree,
    this.answertenroundthree,
    this.answerbonusroundthree,
  ]
  for (var x =0; x<11; x++){
    if (typeof(this.roundThreeAnswers[x]) === "undefined"){
      this.roundThreeAnswers[x] = "NO-ANSWER-SUBMITTED";
    }
    this.roundThreeAnswers[x] = this.roundThreeAnswers[x].trim().toLowerCase();
  }
  try{
      this.playerAnswerService.playerSubmitAnswers("round3", {
        answers: this.roundThreeAnswers,
      }, function(){})
  }
  catch(err){
    console.log(err);
  }
  this.navCtrl.push(SubmitsuccessPage);
}

}
