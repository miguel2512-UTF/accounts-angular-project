import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserRoutingModule } from './user-routing.module';
import { WarningIconModule } from '@shared/components/warning-icon/warning-icon.module';



@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    WarningIconModule
  ]
})
export class UserModule { }
