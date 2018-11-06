import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { triviaNight } from '../../models/triviaNight';
import * as firebase from 'firebase/app';

/*
  Generated class for the QuestionsserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionsserviceProvider {
  private baseUrl = 'https://trivia-site.firebaseio.com';
  public data: any;

  constructor(public http: HttpClient) {
  }

  submitQuestions( date: string, triviaData: triviaNight, callback: Function
  ) {
    var database = firebase.database();
    var rounds = ["Round-1", "Round-2","Round-3"];
    var roundquestions = [triviaData.firstroundquestions, triviaData.secondroundquestions, triviaData.thirdroundquestions];
    var roundanswers = [triviaData.firstroundanswers,triviaData.secondroundanswers,triviaData.thirdroundanswers];
    var questions = ["Question-1","Question-2","Question-3","Question-4","Question-5","Question-6",
    "Question-7","Question-8","Question-9","Question-10"]
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < questions.length; j++) {
        database.ref(date+"/admin/" + rounds[i]+"/" +questions[j]).set({
          Question: roundquestions[i][j],
          Answers: roundanswers[i][j]
        });
      }
    }
    // database.ref("mostrecent").set({
    //   Date: date
    // });



    // var newURL = this.baseUrl + "/" + date + "/Admin/Round-1/Question-1/Question.json" ;
    // this.http.post(newURL, triviaData.firstroundquestions[0])
    // .subscribe(
    //     result => {
    //         callback(null, result);
    //     },

    //     err => {
    //         callback(err, null);
    //     }
    // );
  }

}
