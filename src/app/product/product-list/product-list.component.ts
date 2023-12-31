import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products :any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/inventory-service/products?projection=fullProduct").subscribe({
      next : (data)=>{
        console.log(data);
        this.products=data;
      },
      error : (err)=>{
        console.log(err);
      }
    });
  }
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
