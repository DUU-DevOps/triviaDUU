import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { ReviewAnswersPage } from '../review-answers/review-answers';


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
  private autoGraded = false;
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

  getTeamInfo(round: String, dbRef) {
    var teams: Map<String, String[]> = new Map<String, String[]>();
    dbRef.child("teams").once("value")
      .then(function (snapshot) {
        snapshot.forEach(function (teamSnapshot) {
          var item: String[] = [];
          var currTeam: String = teamSnapshot.key;
          var roundFormat: string = "round" + round;
          var questions = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10", "bonus"];
          for (var x=0; x<10; x++){
            teamSnapshot.child(roundFormat).child(questions[x]).forEach(function (teamAnswersSnapshot) {
              item.push(teamAnswersSnapshot.val())
            });
          }
          teams.set(currTeam, item);
        });
      });
    //console.log(teams);
    return teams;
  }


  grade(round: String) {
    var dateformatted = this.mm + "-" + this.dd + "-" + this.yyyy;
    var db = firebase.database();
    var dbRef = db.ref(dateformatted);
    var teams = this.getTeamInfo(round, dbRef);
    var roundFormat: string = "round" + round;
    var accetableAnswersArr: Array<Array<String>> = [];
    var answersToBeReviewed = [];
    var questionsArr = [];
    var questionsAnswers: Map<String, Array<String>> = new Map<String, Array<String>>();
    var keys = [];
    dbRef.child("admin").child(roundFormat).once("value")
      .then((snapshot) => {
        if(!this.autoGraded) {
        snapshot.forEach(function (questionSnapshot) {
          var item = questionSnapshot.val();
          item.key = questionSnapshot.key;
          var index:number = +questionSnapshot.key.slice(-1)-1;
          if(questionSnapshot.key.slice(-2,-1)!='n') index = +questionSnapshot.key.slice(-2)-1;
          keys[index]=item;
          //console.log(keys);
        });

        for (var x = 0; x < 10; x++) {
          let currAns: Array<String> = keys[x].answers.toLowerCase().split(",");
          let currQuestion = keys[x].question;
          //contingent on the fact that no two questions are the same
          questionsAnswers.set(currQuestion, currAns)
          questionsArr.push(currQuestion);
        }
        var teamNames = Array.from(teams.keys());
        for (let x = 0; x < teamNames.length; x++) {
          var currName: string = teamNames[x].valueOf();
          for (var questionNum = 0; questionNum < 10; questionNum++) {
            let currAccepAns: Array<String> = questionsAnswers.get(questionsArr[questionNum]);
            accetableAnswersArr.push(currAccepAns);
            var teamCurrAnswer: String = teams.get(currName)[questionNum].toLowerCase();
            if (currAccepAns.indexOf(teamCurrAnswer) != -1) {
              dbRef.child("teams").child(currName).child(roundFormat+"score").transaction(function (count) {
                count = count + 1;
                return count;
              });
            }
            else {
              answersToBeReviewed.push([questionNum, teams.get(currName)[questionNum], currName.replace(/-/g, " ")]);
            }
          }
        }

        answersToBeReviewed = answersToBeReviewed.sort(Comparator); 
        this.autoGraded = true; 
      }
      function Comparator(a, b) {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
      }      
  
      }).then((nextPage) => {
          this.navCtrl.push(ReviewAnswersPage,
            {
              answersToBeReviewed:answersToBeReviewed,
              roundStr:roundFormat,
              questionsArr:questionsArr,
              accetableAnswersArr:accetableAnswersArr
            });
        }

      )

      }


  


}
