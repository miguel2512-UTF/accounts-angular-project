import { Component, inject } from '@angular/core';
import { LoanService } from '@modules/loan/services/loan.service';

@Component({
  selector: 'app-loan-page',
  templateUrl: './loan-page.component.html',
  styles: [
  ]
})
export class LoanPageComponent {
  private loanService = inject(LoanService)
  loans = this.loanService.getLoans()
}
