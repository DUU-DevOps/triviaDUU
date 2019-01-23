import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CommitteeLoginPage } from '../pages/committee-login/committee-login';
import { GradingPage } from '../pages/grading/grading';
import { QuestionsPage } from '../pages/questions/questions';
import { SubmitsuccessPage } from '../pages/submitsuccess/submitsuccess';
import { CommitteeOptionsPage } from '../pages/committee-options/committee-options';
import { QuestionsserviceProvider } from '../providers/questionsservice/questionsservice';
import { UsersServiceProvider } from '../providers/users-service/users-service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';



import { TeamCreatePage } from '../pages/team-create/team-create';
import { PlayerQuestionsPage } from '../pages/player-questions/player-questions';
import { LetsplayPage } from '../pages/letsplay/letsplay';
import { GameOverPage } from '../pages/game-over/game-over';


const config = {
  apiKey: "AIzaSyCTFrdcLsW5gtU7QohQ68M82ijy-NTAG7o",
  authDomain: "trivia-site.firebaseapp.com",
  databaseURL: "https://trivia-site.firebaseio.com",
  projectId: "trivia-site",
  storageBucket: "trivia-site.appspot.com",
  messagingSenderId: "344315610954"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CommitteeLoginPage,
    QuestionsPage,
    SubmitsuccessPage,
    CommitteeOptionsPage,
    TeamCreatePage,
    PlayerQuestionsPage,
    LetsplayPage,
    GameOverPage,
    GradingPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,        
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CommitteeLoginPage,
    QuestionsPage,
    SubmitsuccessPage,
    CommitteeOptionsPage,
    TeamCreatePage,
    PlayerQuestionsPage,
    LetsplayPage,
    GameOverPage,
    GradingPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    QuestionsserviceProvider,
    UsersServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
