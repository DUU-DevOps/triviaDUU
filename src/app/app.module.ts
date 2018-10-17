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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CommitteeLoginPage,
    QuestionsPage,
    SubmitsuccessPage
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
    SubmitsuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
