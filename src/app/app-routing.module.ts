import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';

const routes: Routes = [{

 path: '',component : AppLayoutComponent,
  children:[
    {
      path:'', component:OrderDetailComponent
    },
    {
      path:'products', component:ProductListComponent
    },
    {
      path:'customers', component:CustomerComponent
    } ,{
      path:'orders', component:OrderListComponent
    }
    ,{
      path:'orders/list', component:OrderDetailComponent
    }
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
