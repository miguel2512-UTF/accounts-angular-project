import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ErrorRoutingModule } from './error-routing.module';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
