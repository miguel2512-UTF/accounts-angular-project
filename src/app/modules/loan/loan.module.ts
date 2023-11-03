import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanPageComponent } from './pages/loan-page/loan-page.component';
import { LoanRoutingModule } from './loan-routing.module';



@NgModule({
  declarations: [
    LoanPageComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
