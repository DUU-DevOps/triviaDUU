import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { playerTriviaNight } from '../../models/playerTriviaNight';
import * as firebase from 'firebase/app';
import { netIDTeamName } from '../../models/netIDTeamName';
import { ParseSourceFile } from '@angular/compiler';
import { v } from '@angular/core/src/render3';

var config = {
  apiKey: "AIzaSyCTFrdcLsW5gtU7QohQ68M82ijy-NTAG7o",
  authDomain: "trivia-site.firebaseapp.com",
  databaseURL: "https://trivia-site.firebaseio.com",
  projectId: "trivia-site",
  storageBucket: "trivia-site.appspot.com",
  messagingSenderId: "344315610954"
};
firebase.initializeApp(config);


/*
  Generated class for the PlayerSubmitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlayerSubmitProvider {
  private baseUrl = 'https://trivia-site.firebaseio.com';
  
  public data: any;

  constructor(public http: HttpClient) {}
  

myTeamName;

playerSubmitAnswers(roundID: string, triviaData: playerTriviaNight, callback: Function
) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  var currDate = mm + "-" + dd + "-" + yyyy;
  var database = firebase.database();
  var roundanswers = triviaData.answers;
  var questions = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10","bonus"];
  console.log("Round Answers are: " + roundanswers)
  this.myTeamName = this.myTeamName.replace(/\ /g,"-");;
  
  for (var j = 0; j < questions.length; j++) {
      //console.log(date+"/teams/" + "team-name/" + rounds[i] + "/" + questions[j])
      database.ref(currDate+"/teams/" + this.myTeamName + "/" + roundID + "/" + questions[j]+"/").set({
        answers: roundanswers[j]
      });
    }
    
    if (roundID == "round1"){
     /**
     * If the value doesn't already exist, set to 0
     */
    var round1Init = false;
    var round2Init = false;
    var round3Init = false;

      database.ref(currDate+"/teams/" + this.myTeamName).once('value', function(snapshot) {
        if(typeof snapshot.val().round1score !== 'undefined'){
          round1Init = true;
        }
      });
      
      if (! round1Init){
        database.ref(currDate+"/teams/" + this.myTeamName).update({
          "round1score" : 0
        });
      }

      database.ref(currDate+"/teams/" + this.myTeamName).once('value', function(snapshot) {
        if(typeof snapshot.val().round2score !== 'undefined'){
          round2Init = true;
        }
      });
      
      if (! round2Init){
        database.ref(currDate+"/teams/" + this.myTeamName).update({
          "round2score" : 0
        });
      }

      database.ref(currDate+"/teams/" + this.myTeamName).once('value', function(snapshot) {
        if(typeof snapshot.val().round3score !== 'undefined'){
          round3Init = true;
        }
      });
      
      if (! round3Init){
        database.ref(currDate+"/teams/" + this.myTeamName).update({
          "round3score" : 0
        });
      }
    }
}

getTeamName(triviaData: netIDTeamName){
  this.myTeamName = triviaData.teamName;

  
}


}