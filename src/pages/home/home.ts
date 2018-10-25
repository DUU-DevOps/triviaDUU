import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommitteeLoginPage } from '../committee-login/committee-login';

import { TeamCreatePage } from '../team-create/team-create';


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


  goToTeamCreatePage() {
    this.navCtrl.push(TeamCreatePage);
  }


}
