import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { UserIconModule } from '@shared/components/user-icon/user-icon.module';
import { MenuIconModule } from '@shared/components/menu-icon/menu-icon.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserIconModule,
    MenuIconModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
