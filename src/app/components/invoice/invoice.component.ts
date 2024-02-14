import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IInvoice } from 'src/app/modules/invoice/interface/invoice.interface';
import { InvoiceService } from 'src/app/modules/invoice/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  startDate: string = '';
  endDate: string = '';
  invoices: IInvoice[] = [];
  page = 1;
  constructor(private invoiceService: InvoiceService) {
  
  }

  getInvoicesByDate() {
    this.invoiceService.getInvoiceByDate(this.startDate, this.endDate).subscribe(
      invoices => {
        this.invoices = invoices;
      },
      error => {
        console.log('Error al obtener los registros')
      }
    );
  }

  getInvoices() {
    this.invoiceService.getInvoices().subscribe(
      invoices => {
        console.log(invoices);
        this.invoices = invoices;
      },
      error => {
        console.log('Error al obtener los registros')
      }
    );
  }

  ngOnInit(): void {
    this.getInvoices();
  }
}
