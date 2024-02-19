import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { IInvoice } from 'src/app/modules/invoice/interface/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  getInvoiceByDate(startDate: string, endDate: string): Observable<IInvoice[]> {
    const url = `${environment.apiUrl}/invoices/by_date_range`;
    const params = new HttpParams()
      .set('start_date', startDate)
      .set('end_date', endDate)

    return this.http.get<IInvoice[]>(url, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  getInvoices(): Observable<IInvoice[]>{
    const url = `${environment.apiUrl}/invoices`;
    return this.http.get<IInvoice[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    return throwError("Mensaje de error", error)
  }
}
