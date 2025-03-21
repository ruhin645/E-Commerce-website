import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';
import { RouterOutlet,RouterLink } from '@angular/router';
import { RouterModule,Router  } from '@angular/router';
import { WebProductsComponent } from "../web-products/web-products.component";
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, WebProductsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
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
