import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SubmitsuccessPage } from '../submitsuccess/submitsuccess';
import { QuestionsserviceProvider } from '../../providers/questionsservice/questionsservice';
import { triviaNight } from '../../models/triviaNight';
/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/compthreents/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
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
  public bonusroundone: string;
  public bonusquestionroundone: string;
  public bonusanswerroundone: string;

  public questiononeroundtwo: string;
  public answeroneroundtwo: string;
  public questiontworoundtwo: string;
  public answertworoundtwo: string;
  public questionthreeroundtwo: string;
  public answerthreeroundtwo: string;
  public questionfourroundtwo: string;
  public answerfourroundtwo: string;
  public questionfiveroundtwo: string;
  public answerfiveroundtwo: string;
  public questionsixroundtwo: string;
  public answersixroundtwo: string;
  public questionsevenroundtwo: string;
  public answersevenroundtwo: string;
  public questioneightroundtwo: string;
  public answereightroundtwo: string;
  public questionnineroundtwo: string;
  public answernineroundtwo: string;
  public questiontenroundtwo: string;
  public answertenroundtwo: string;
  public bonusquestionroundtwo: string;
  public bonusanswerroundtwo: string;

  public questiononeroundthree: string;
  public answeroneroundthree: string;
  public questiontworoundthree: string;
  public answertworoundthree: string;
  public questionthreeroundthree: string;
  public answerthreeroundthree: string;
  public questionfourroundthree: string;
  public answerfourroundthree: string;
  public questionfiveroundthree: string;
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
  public bonusquestionroundthree: string;
  public bonusanswerroundthree: string;

  public firstroundquestions: Array<String>;
    public firstroundanswers: Array<String>;
    public secondroundquestions : Array<String>;
    public secondroundanswers : Array<String>;
    public thirdroundquestions : Array<String>;
    public thirdroundanswers : Array<String>;
    public triviaData:triviaNight;
    public date: string;

  constructor(public questionsService: QuestionsserviceProvider, public loadCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  goToSuccess() {
    this.firstroundquestions =[
      this.questiononeroundone,
      this.questiontworoundone,
      this.questionthreeroundone,
      this.questionfourroundone,
      this.questionfiveroundone,
      this.questionsixroundone,
      this.questionsevenroundone,
      this.questioneightroundone,
      this.questionnineroundone,
      this.questiontenroundone,
      this.bonusquestionroundone,
    ]

    this.firstroundanswers=[
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
      this.bonusanswerroundone,
    ]

    this.secondroundquestions=[
      this.questiononeroundtwo,
      this.questiontworoundtwo,
      this.questionthreeroundtwo,
      this.questionfourroundtwo,
      this.questionfiveroundtwo,
      this.questionsixroundtwo,
      this.questionsevenroundtwo,
      this.questioneightroundtwo,
      this.questionnineroundtwo,
      this.questiontenroundtwo,
      this.bonusquestionroundtwo,
    ]

    this.secondroundanswers=[
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
      this.bonusanswerroundtwo,

    ]
    
    this.thirdroundquestions=[
      this.questiononeroundthree,
      this.questiontworoundthree,
      this.questionthreeroundthree,
      this.questionfourroundthree,
      this.questionfiveroundthree,
      this.questionsixroundthree,
      this.questionsevenroundthree,
      this.questioneightroundthree,
      this.questionnineroundthree,
      this.questiontenroundthree,
      this.bonusquestionroundthree,
    ]
    this.thirdroundanswers=[
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
      this.bonusanswerroundthree,
    ]

    try{
      var date = this.date.toString()
      var year = date.split("-")[0]
      var month = date.split("-")[1]
      if (month.split("")[0] == "0"){
        month = month.split("")[1]
      }
      var day = date.split("-")[2]
      if (day.split("")[0] == "0"){
        day = day.split("")[1]
      }
      var newDate = month + "-" + day + "-" + year

      this.questionsService.submitQuestions(newDate, {
        firstroundanswers: this.firstroundanswers,
        firstroundquestions: this.firstroundquestions,
        secondroundanswers : this.secondroundanswers,
        secondroundquestions : this.secondroundquestions,
        thirdroundanswers : this.thirdroundanswers,
        thirdroundquestions : this.thirdroundquestions,
      }, function(){})
    }
    catch(err){
      console.log(err)
      console.log("Could not submit");
    }
    this.navCtrl.push(SubmitsuccessPage);
  }




}
