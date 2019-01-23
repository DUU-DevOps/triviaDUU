import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradingPage } from './grading';

@NgModule({
  declarations: [
    GradingPage,
  ],
  imports: [
    IonicPageModule.forChild(GradingPage),
  ],
})
export class GradingPageModule {}
