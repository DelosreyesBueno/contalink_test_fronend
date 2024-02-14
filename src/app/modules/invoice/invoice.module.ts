import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceService } from 'src/app/modules/invoice/services/invoice.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ], 
  providers: [InvoiceService]
})
export class InvoiceModule { }
