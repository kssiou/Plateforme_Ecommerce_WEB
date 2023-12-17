import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ButtonModule } from 'primeng/button';
import { CustomerComponent } from './customer/customer.component';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { TableModule } from 'primeng/table';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import {SplitterModule} from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import {HttpClientModule} from "@angular/common/http";







@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    CustomerComponent,
    OrderListComponent,
    OrderDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    ButtonModule,
    TableModule ,
    SplitterModule,
    DividerModule,
    AccordionModule,
    ToolbarModule,
    PanelModule,
    InputTextModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
