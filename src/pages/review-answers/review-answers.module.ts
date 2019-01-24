import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewAnswersPage } from './review-answers';

@NgModule({
  declarations: [
    ReviewAnswersPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewAnswersPage),
  ],
})
export class ReviewAnswersPageModule {}
