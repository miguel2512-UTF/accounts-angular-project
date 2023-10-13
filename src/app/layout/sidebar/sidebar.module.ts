import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { HomeIconModule } from '@shared/components/home-icon/home-icon.module';
import { UserIconModule } from '@shared/components/user-icon/user-icon.module';
import { LoanIconModule } from '@shared/components/loan-icon/loan-icon.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HomeIconModule,
    UserIconModule,
    LoanIconModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
