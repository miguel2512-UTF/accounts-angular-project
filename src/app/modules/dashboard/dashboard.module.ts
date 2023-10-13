import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarModule } from '@layout/sidebar/sidebar.module';
import { HeaderModule } from '@layout/header/header.module';



@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    SidebarModule
  ]
})
export class DashboardModule { }
