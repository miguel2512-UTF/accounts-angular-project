import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [
    CookieService
  ]
})
export class AuthModule { }
