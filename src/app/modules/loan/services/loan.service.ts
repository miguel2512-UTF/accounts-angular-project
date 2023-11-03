import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import Loan from 'src/app/data/models/loan.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private readonly API_URL = environment.API_BACKEND_URL
  private readonly http = inject(HttpClient)

  getLoans() {
    return this.http.get<{ success: boolean, body: { data: Loan[] } }>(`${this.API_URL}/loan`).pipe(
      map(res => res.body.data)
    )
  }

}
