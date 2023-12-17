import { Component } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
  products = [
    { id: 1, name: 'Product A', quantity: 200, price: 10 },
 
  ];

}
