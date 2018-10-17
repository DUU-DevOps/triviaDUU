import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommitteeOptionsPage } from './committee-options';

@NgModule({
  declarations: [
    CommitteeOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(CommitteeOptionsPage),
  ],
})
export class CommitteeOptionsPageModule {}
