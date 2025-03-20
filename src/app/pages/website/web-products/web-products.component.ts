import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';
import { RouterOutlet,RouterLink } from '@angular/router';
import { RouterModule,Router  } from '@angular/router';
@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent {
  categoryList: any []= [];
  productList: any[] = [];
constructor(private productService: ProductService,private router: Router){}
ngOnInit(): void {
  this.getAllCategory();
  this.getAllProducts();
}
navigateToProducts(categoryId: number){
this.router.navigate(['/products', categoryId]);
}

getAllCategory(){
  this.productService.getCategory().subscribe((res:any)=>{
    this.categoryList = res.data;
  })
}
getAllProducts(){
  this.productService.getProducts().subscribe((res:any)=>{
    this.productList = res.data;
  })
}
}
