import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicModule } from 'ionic-angular';
import { PlayerQuestionsPage } from '../player-questions/player-questions';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LetsplayPage } from '../letsplay/letsplay';



/**
 * Generated class for the TeamCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-create',
  templateUrl: 'team-create.html',
})
export class TeamCreatePage {

  thing =[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamCreatePage');
  }

 

  playerMax = 6;
  
  playerNames = [
     {
      player: {name: "Player 1", val: ""}
     },
     {
      player: {name: "Player 2", val: ""}
    },
    {
      player: {name: 'Player 3', val:""}
    },
    {
      player: {name: 'Player 4', val:""}
    },
    {
      player: {name: 'Player 5', val:""}
    },
    {
      player: {name: 'Player 6', val:""}
    }
  ];
  

  iteratingArray = [];
  playersArray = [];
  playerNameArray = [];


  buttonShouldStay = true;

    AddPlayer(){
  
    this.iteratingArray.push("arbitrary string used for counter");
    var numOfPlayers = this.iteratingArray.length-1;
    
    this.playersArray.push(this.playerNames[numOfPlayers].player.name);

    if (numOfPlayers+1 == this.playerMax){
      this.buttonShouldStay = false;
    } 
  

  }



  presentConfirm() {
    let alert = this.alertController.create({
      title: 'Confirm Team',
      buttons: [
        {
          text: 'Go Back',
          handler: data => {
            // this.goToHomePage();
            this.navCtrl.popToRoot();
          }
        },
        {
          text: 'Proceed',
          handler: data => {
            this.goToLetsPlayPage();
          }
        }
      ]
    });
    alert.present();
  }

  SubmitTeams(){
    for(var i = 0; i < this.playerMax; i++){
    this.playerNameArray.push(this.thing[i]);
      if (this.thing[i] == undefined){
        this.playerNameArray.pop();
      }
    }
  
    console.log(this.playerNameArray);

    this.presentConfirm();
  }



  goToPlayerQuestionsPage(){
    this.navCtrl.push(PlayerQuestionsPage);

  }

  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

  goToLetsPlayPage(){
    this.navCtrl.push(LetsplayPage);
  }








   
  
  

}
