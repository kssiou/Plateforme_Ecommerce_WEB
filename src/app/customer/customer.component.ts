import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  customers = [
    { id: '001', name: 'Product A', email:"mouad@gmail.com" },
 
  ];
  onAddButtonClick() {
    // Add your logic here for handling the "Add" button click
    console.log('Add button clicked');
  }
  onUpdateButtonClick(product: any) {
    // Add your logic for handling the "Update" button click
    console.log('Update button clicked for:', product);
}

onDeleteButtonClick(product: any) {
    // Add your logic for handling the "Delete" button click
    console.log('Delete button clicked for:', product);
}

onInfoButtonClick(product: any) {
    // Add your logic for handling the "Info" button click
    console.log('Info button clicked for:', product);
}


}
