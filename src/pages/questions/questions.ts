
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, TabHighlight } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { SubmitsuccessPage } from '../submitsuccess/submitsuccess';
import { Injectable } from '@angular/core';
import firebase from '@ionic-native/firebase'
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
  public questionfoveroundone: string;
  public answefiveroundone: string;
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

  public questiononeroundthree: string;
  public answeroneroundthree: string;
  public questiontworoundthree: string;
  public answertworoundthree: string;
  public questionthreeroundthree: string;
  public answerthreeroundthree: string;
  public questionfourroundthree: string;
  public answerfourroundthree: string;
  public questionfoveroundthree: string;
  public answefiveroundthree: string;
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
      this.questionfoveroundone,
      this.questionsixroundone,
      this.questionsevenroundone,
      this.questioneightroundone,
      this.questionnineroundone,
      this.questiontenroundone,
    ]

    this.firstroundanswers=[
      this.answeroneroundone,
      this.answertworoundone,
      this.answerthreeroundone,
      this.answerfourroundone,
      this.answefiveroundone,
      this.answersixroundone,
      this.answersevenroundone,
      this.answereightroundone,
      this.answernineroundone,
      this.answertenroundone,
    ]

    this.secondroundquestions=[
      this.questiononeroundtwo,
      this.questiontworoundtwo,
      this.questionthreeroundtwo,
      this.questionfourroundtwo,
      this.questionfoveroundtwo,
      this.questionsixroundtwo,
      this.questionsevenroundtwo,
      this.questitwoightroundtwo,
      this.questionnineroundtwo,
      this.questiontenroundtwo,
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

    ]
    
    this.thirdroundquestions=[
      this.questiononeroundthree,
      this.questiontworoundthree,
      this.questionthreeroundthree,
      this.questionfourroundthree,
      this.questionfoveroundthree,
      this.questionsixroundthree,
      this.questionsevenroundthree,
      this.questioneightroundthree,
      this.questionnineroundthree,
      this.questiontenroundthree,
    ]
    this.thirdroundanswers=[
      this.answeroneroundthree,
      this.answertworoundthree,
      this.answerthreeroundthree,
      this.answerfourroundthree,
      this.answefiveroundthree,
      this.answersixroundthree,
      this.answersevenroundthree,
      this.answereightroundthree,
      this.answernineroundthree,
      this.answertenroundthree,
    ]

    try{
      this.questionsService.submitQuestions(this.date, {
        firstroundanswers: this.firstroundanswers,
        firstroundquestions: this.firstroundquestions,
        secondroundanswers : this.secondroundanswers,
        secondroundquestions : this.secondroundquestions,
        thirdroundanswers : this.thirdroundanswers,
        thirdroundquestions : this.thirdroundquestions,
      }, function(){})
    }
    catch(err){
      console.log("Could not submit");
    }
    this.navCtrl.push(SubmitsuccessPage);


  }




}
