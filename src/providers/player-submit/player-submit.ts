import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { playerTriviaNight } from '../../models/playerTriviaNight';
import * as firebase from 'firebase/app';
import { netIDTeamName } from '../../models/netIDTeamName';
firebase.initializeApp


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

playerSubmitAnswers( date: string, triviaData: playerTriviaNight, callback: Function
) {
  var database = firebase.database();
  var rounds = ["round-1", "round-2", "round-3"];
  var roundanswers = [triviaData.roundOneAnswers, triviaData.roundTwoAnswers, triviaData.roundThreeAnswers];
  var questions = ["question-1","question-2","question-3","question-4","question-5","question-6",
  "question-7","question-8","question-9","question-10"]
  console.log("Round Answers are: " + roundanswers)
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < questions.length; j++) {
      //console.log(date+"/teams/" + "team-name/" + rounds[i] + "/" + questions[j])
      database.ref(date+"/teams/" + this.myTeamName + "/" + rounds[i] + "/" + questions[j]+"/").set({
        Answers: roundanswers[i][j]
      });
    }
  }
  database.ref(date+"/teams/" + this.myTeamName).update({
    "round1score":0,
    "round2score":0,
    "round3score":0
  });
}



getTeamName(triviaData: netIDTeamName){
  this.myTeamName = triviaData.teamName;

  
}


}