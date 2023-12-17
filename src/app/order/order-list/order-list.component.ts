import { Component } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  orders = [
    { id: '001', customer_ID: 1, status:"pending",date:"2 december" },
 
  ];
  onAddButtonClick() {
    // Add your logic here for handling the "Add" button click
    console.log('Add button clicked');
  }
  onUpdateButtonClick(order: any) {
    // Add your logic for handling the "Update" button click
    console.log('Update button clicked for:', order);
}

onDeleteButtonClick(order: any) {
    // Add your logic for handling the "Delete" button click
    console.log('Delete button clicked for:', order);
}

onInfoButtonClick(order: any) {
    // Add your logic for handling the "Info" button click
    console.log('Info button clicked for:', order);
}



}
