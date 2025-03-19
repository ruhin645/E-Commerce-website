import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
 isSidePanelVisible: boolean = false;
 productObj: any = 
  {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
   
  };
  categoryList: any = [];
  productsList: any = [];
  errorMessage: string = '';
 constructor(private productService: ProductService) {

  }
 ngOnInit(): void {
  this.getProducts();
   this.getAllCategory();
 }
 getProducts() {
  this.productService.getProducts().subscribe({
    next: (res: any) => {
      console.log('Data from API:', res);
      this.productsList = res.data; // Use the response directly or as per the API structure
    },
    error: (err: HttpErrorResponse) => {
      console.error('Error details:', err);
      this.errorMessage = 'Failed to fetch categories. Please try again later.';
    }
  });
}
 getAllCategory() {
  this.productService.getCategory().subscribe({
    next: (res: any) => {
      console.log('Data from API:', res);
      this.categoryList = res.data; // Use the response directly or as per the API structure
    },
    error: (err: HttpErrorResponse) => {
      console.error('Error details:', err);
      this.errorMessage = 'Failed to fetch categories. Please try again later.';
    }
  });
}

 openSidePanel(){
  this.isSidePanelVisible = true
 }
 closeSidePanel(){
  this.isSidePanelVisible = false
 }
 onSave(){
  console.log("Hello")
 this.productService.saveProduct(this.productObj).subscribe((res:any)=>{
   if(res.result){
    alert("Product created successfully");
    this.getProducts();
   }
   else{
    alert("Failed to create product")
   }
 })
 }
 onEdit(item: any){
 this.productObj = item;
 this.openSidePanel();
 }
 onDelete(item: any){
  console.log('Product to delete:', item);
  this.productService.deleteProduct(item.productId).subscribe({
    next: (res: any) => {
      console.log('Delete response:', res);
      if(res.result) {
        alert("Product deleted successfully");
        this.getProducts();
      } else {
        alert(`Failed to delete product. Server message: ${res.message || 'No message provided'}`);
      }
    },
    error: (err) => {
      console.error('Delete error:', err);
      alert('Error occurred while deleting the product');
    }
  });
  
 }
 onUpdate(){
  this.productService.updateProduct(this.productObj).subscribe((res:any)=>{
    if(res.result){
     alert("Product updated successfully");
     this.getProducts();
    }
    else{
     alert("Failed to update product")
    }
  })
 }
}
