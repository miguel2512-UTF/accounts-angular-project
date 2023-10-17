import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { HomeIconModule } from '@shared/components/home-icon/home-icon.module';
import { UserIconModule } from '@shared/components/user-icon/user-icon.module';
import { LoanIconModule } from '@shared/components/loan-icon/loan-icon.module';
import { RouterModule } from '@angular/router';
import { LogoutIconModule } from '@shared/components/logout-icon/logout-icon.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HomeIconModule,
    UserIconModule,
    LoanIconModule,
    LogoutIconModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
