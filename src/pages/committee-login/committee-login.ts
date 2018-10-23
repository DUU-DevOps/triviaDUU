import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';
import { CommitteeOptionsPage } from '../committee-options/committee-options';
import { UsersServiceProvider } from '../../providers/users-service/users-service';

/**
 * Generated class for the CommitteeLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-committee-login',
  templateUrl: 'committee-login.html',
})
export class CommitteeLoginPage {
  public email: string;
  public password: string;

  constructor(public usersService: UsersServiceProvider, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteeLoginPage');
  }

  goToOptions() {
    var loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    this.usersService.loginUser(this.email,this.password).then(authData => {
      loader.dismiss();
      this.navCtrl.push(CommitteeOptionsPage);
    }, error => {
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
    })

  }



}
