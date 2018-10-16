import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommitteeLoginPage } from './committee-login';

@NgModule({
  declarations: [
    CommitteeLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(CommitteeLoginPage),
  ],
})
export class CommitteeLoginPageModule {}
