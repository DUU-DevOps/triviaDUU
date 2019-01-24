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
    database.ref(date+"/play").set({
      Play: false
    });
    var rounds = ["round1", "round2","round3"];
    var roundquestions = [triviaData.firstroundquestions, triviaData.secondroundquestions, triviaData.thirdroundquestions];
    var roundanswers = [triviaData.firstroundanswers,triviaData.secondroundanswers,triviaData.thirdroundanswers];
    var questions = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10"];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < questions.length; j++) {
        database.ref(date+"/admin/" + rounds[i]+"/" +questions[j]).set({
          question: roundquestions[i][j],
          answers: roundanswers[i][j]
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
