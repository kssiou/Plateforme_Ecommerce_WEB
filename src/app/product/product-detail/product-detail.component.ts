import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular'; 
import { ColDef } from 'ag-grid-community';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  standalone: true,
  imports: [AgGridModule,ButtonModule],// Add AG Grid Module to component
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  rowData= [
     { mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
     { mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
    
     { mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true }
   ] ;

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { headerName: 'Mission', field: 'mission' },
    { headerName: 'Company', field: 'company' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'Date', field: 'date' },
    { headerName: 'Rocket', field: 'rocket' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Successful', field: 'successful' },
    { headerName: 'actions', field: 'actions' }
  ];
  onAddButtonClick() {
    // Add your logic here for handling the "Add" button click
    console.log('Add button clicked');
  }


}
