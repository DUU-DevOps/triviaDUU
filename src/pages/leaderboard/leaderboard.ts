import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';

/**
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {
  private today = new Date();
  private dd = this.today.getDate().toString();
  private mm = (this.today.getMonth()+1).toString(); //January is 0!
  private yyyy = this.today.getFullYear().toString();
  public sortedTeamsScores = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');
    this.showLeaderboard();
  }

  getTeamInfo(dbRef) {
    let teams = [];
    let teamScores = [];
    dbRef.once("value").then(function (snapshot) {
        snapshot.forEach(function (teamSnapshot) {
          let currTeam: String = teamSnapshot.key;
          var round1score = teamSnapshot.val().round1score;
          var round2score = teamSnapshot.val().round2score;
          var round3score = teamSnapshot.val().round3score;
          console.log(round1score + " " + round2score + " " + round3score);

            teamScores.push({name:currTeam, value:round1score+round2score+round3score});
          });
        });

  
    console.log(teamScores);
    return teamScores;
    }
      
  showLeaderboard(){
    if (this.mm.split("")[0] === "0"){
      this.mm = this.mm.split("")[1]
  }
  if (this.dd.split("")[0] === "0"){
      this.dd = this.dd.split("")[1]
  }
  var db = firebase.database();
    var date = this.mm + "-" + this.dd + "-" + this.yyyy;
    //var date = '3-4-2019'
    console.log(date);

    var dbRef = db.ref(date + "/teams");
    var teamsAndScores = this.getTeamInfo(dbRef);
  

      this.sortedTeamsScores = teamsAndScores.sort(function(a, b) {
      return (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0)
    });
          // for (var x = (sorted.length-1); x > -1; x--){
          //     $( "#popupMain" ).append("<p><b>Team Name: </b>" + sorted[x].name  + "<b> Score: </b>" + sorted[x].value +"</p>");
          // }
      
  }

}
