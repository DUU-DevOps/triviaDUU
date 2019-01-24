import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerQuestionsPage } from './player-questions';

@NgModule({
  declarations: [
    PlayerQuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerQuestionsPage),
  ],
})
export class PlayerQuestionsPageModule {}
