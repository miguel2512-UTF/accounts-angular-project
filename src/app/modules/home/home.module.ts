import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from '@layout/header/header.module';
import { SidebarModule } from '@layout/sidebar/sidebar.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    SidebarModule
  ]
})
export class HomeModule { }
