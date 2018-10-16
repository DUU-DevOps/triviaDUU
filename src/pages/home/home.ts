import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommitteeLoginPage } from '../committee-login/committee-login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToCommitteeLogin() {
    this.navCtrl.push(CommitteeLoginPage);
  }

}
