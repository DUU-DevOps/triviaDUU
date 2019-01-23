import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import * as firebase from 'firebase/app';
import * as $ from 'jquery';


/**
* Generated class for the GradingPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-grading',
  templateUrl: 'grading.html',
})
export class GradingPage {
  private today = new Date();
  private dd = this.today.getDate();
  private mm = this.today.getMonth() + 1; //January is 0!
  private yyyy = this.today.getFullYear();
  // private dateformatted = this.mm + "-" + this.dd + "-" + this.yyyy;
  private dateformatted = '10-24-18';

  private db = firebase.database();
  // private dbRef = this.db.ref(this.dateformatted);
  private dbRef = this.db.ref('10-24-18');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradingPage');
  }

  dataToArray(dataObject: any) {
    var returnArr = [];
    var questionList = [];
    for (var i = 1; i <= 10; i++) {
      questionList.push("question" + i);
    }
    for (var i = 0; i < questionList.length; i++) {
      returnArr.push(dataObject.questionList[i]);
    }
    return returnArr;
  }

  getTeamInfo(round: String) {
    var teams: Map<String, String[]> = new Map<String, String[]>();
    this.dbRef.child("teams").once("value")
      .then(function (snapshot) {
        snapshot.forEach(function (teamSnapshot) {
          var item: String[] = [];
          var currTeam: String = teamSnapshot.key;
          var roundFormat: string = "round" + round;
          teamSnapshot.child(roundFormat).forEach(function (teamAnswersSnapshot) {
            item.push(teamAnswersSnapshot.val())
          });
          teams.set(currTeam, item);
        });
      });
    return teams;
  }

  grade(round: String) {
    let teams = this.getTeamInfo(round);
    let roundFormat: string = "round" + round;
    this.dbRef.child("admin").child(roundFormat).once("value")
      .then(function (snapshot) {
        let accetableAnswersArr = [];
        let answersToBeReviewed = [];
        let questionsArr = [];
        let questionsAnswers: Map<String, Array<String>> = new Map<String, Array<String>>();
        let keys = [];
        snapshot.forEach(function (questionSnapshot) {
          var item = questionSnapshot.val();
          item.key = questionSnapshot.key;
          keys.push(item);
        });
        for (var x = 0; x < 10; x++) {
          let currAns: Array<String> = keys[x].answers.split(",");
          let currQuestion = keys[x].question;
          questionsAnswers.set(currQuestion, currAns)
          questionsArr.push(keys[x].question);
        }
        let teamNames:String[]= Array.from(teams.keys());
        for (let x = 0; x < teamNames.length; x++) {
          let currName = teamNames[x];
          let hasCorrectAnswer = false;
          for (let questionNum = 0; questionNum < 10; questionNum++) {
            let currAccepAns:Array<String> = questionsAnswers.get(questionsArr[questionNum]);
            let teamCurrAnswer:String = teams.get(currName)[questionNum][0];
            if (currAccepAns.indexOf(teamCurrAnswer)!=-1) {
              var dbLoc = this.dateformatted + "/teams/" + currName + "/" + roundFormat + "score/";
              var currLoc = this.db.ref(dbLoc);
              currLoc.transaction(function (count) {
                count = count + 1;
                return count;
              });
              hasCorrectAnswer = true;
              break;
            }
            if (!hasCorrectAnswer) {
              answersToBeReviewed.push([questionNum, teams.get(currName)[questionNum], currName]);
            }
          }
        }
        function Comparator(a, b) {
          if (a[0] < b[0]) return -1;
          if (a[0] > b[0]) return 1;
          return 0;
        }
        answersToBeReviewed = answersToBeReviewed.sort(Comparator);
        var roundStr = round.replace("-", "");
        // console.log(answersToBeReviewed);
        //need answertsToBeReviewed, Questions
        for (var k = 0; k < answersToBeReviewed.length; k++) {
          $("#popupMain").append('<div class="popup" id="' + answersToBeReviewed[k][2] + answersToBeReviewed[k][0] + '"> ' +
            '<h5> Question ' + answersToBeReviewed[k][0] + '</h5>' +
            '<p>Question: ' + questionsArr[answersToBeReviewed[k][0]] + '</p>' +
            '<p>Accepted Answers: ' + accetableAnswersArr[answersToBeReviewed[k][0]] + ' </p>' +
            '<p>Team Name: ' + answersToBeReviewed[k][2] + '</p>' +
            '<p>Team Answer: ' + answersToBeReviewed[k][1] + '</p>' +
            '<button onclick="correct(\'' + roundStr + '\', \'' + answersToBeReviewed[k][2] + '\', \'' + answersToBeReviewed[k][0] + '\')">Correct</button>' +
            '<button onclick="incorrect(\'' + answersToBeReviewed[k][2] + answersToBeReviewed[k][0] + '\')">Incorrect</button>' +
            '</div>');
        }
      });
  }
  correct(round, teamName, questionNum) {
    //console.log(round + " " + teamName);
    var dbLoc = (this.dateformatted + "/teams/" + teamName + "/" + round + "score/");
    var currLoc = this.db.ref(dbLoc);

    currLoc.transaction(function (count) {
      count = count + 1;
      return count;
    });
    this.incorrect(teamName + questionNum)
  }
  incorrect(ID) {
    $("#" + ID).remove();
  }

}
