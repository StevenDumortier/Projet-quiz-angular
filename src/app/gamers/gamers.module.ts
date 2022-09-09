import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamersRoutingModule } from './gamers-routing.module';
import { PageRankingGamersComponent } from './page-ranking-gamers/page-ranking-gamers.component';
import { PageWelcomeGamersComponent } from './page-welcome-gamers/page-welcome-gamers.component';
import { PageGameGamersComponent } from './page-game-gamers/page-game-gamers.component';


@NgModule({
  declarations: [

  
    PageRankingGamersComponent,
        PageWelcomeGamersComponent,
        PageGameGamersComponent
  ],
  imports: [
    CommonModule,
    GamersRoutingModule
  ]
})
export class GamersModule { }
