import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EndtriviaPage } from './endtrivia';

@NgModule({
  declarations: [
    EndtriviaPage,
  ],
  imports: [
    IonicPageModule.forChild(EndtriviaPage),
  ],
})
export class EndtriviaPageModule {}
