import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
  activeCategoryId: number = 0;
  products: any[]=[];
constructor(private activatedRoute: ActivatedRoute,private productService:ProductService){
  this.activatedRoute.params.subscribe((res:any)=>{
this.activeCategoryId=res.id;
this.loadProducts();
  })
}

loadProducts(){
  this.productService.getProductsByCategory(this.activeCategoryId).subscribe((res:any)=>{
this.products = res.data;
console.log("gfhgdgns",res);
  })
}
}
