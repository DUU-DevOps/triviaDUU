import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamCreatePage } from './team-create';

@NgModule({
  declarations: [
    TeamCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(TeamCreatePage),
  ],
})
export class TeamCreatePageModule {}
