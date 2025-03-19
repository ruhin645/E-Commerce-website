import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
products$: Observable<any>;
  constructor(@Inject(ProductService) private productService: ProductService) {
    this.products$ = this.productService.getCategory().pipe(
      map((item:any)=>{
        return item.data
      })
    );
  }

 
}





