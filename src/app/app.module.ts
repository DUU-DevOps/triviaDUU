import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CommitteeLoginPage } from '../pages/committee-login/committee-login';
import { QuestionsPage } from '../pages/questions/questions';
import { SubmitsuccessPage } from '../pages/submitsuccess/submitsuccess';
import { CommitteeOptionsPage } from '../pages/committee-options/committee-options';

import { TeamCreatePage } from '../pages/team-create/team-create';
import { PlayerQuestionsPage } from '../pages/player-questions/player-questions';
import { LetsplayPage } from '../pages/letsplay/letsplay';
import { GameOverPage } from '../pages/game-over/game-over';


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
    GameOverPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    GameOverPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
