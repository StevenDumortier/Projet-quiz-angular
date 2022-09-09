import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { PageWelcomeAdminComponent } from './page-welcome-admin/page-welcome-admin.component';
import { PageAddQuestionAdminComponent } from './page-add-question-admin/page-add-question-admin.component';
import { PagePlayersGestionAdminComponent } from './page-players-gestion-admin/page-players-gestion-admin.component';


@NgModule({
  declarations: [
    PageWelcomeAdminComponent,
    PageAddQuestionAdminComponent,
    PagePlayersGestionAdminComponent
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule
  ]
})
export class AdminsModule { }
