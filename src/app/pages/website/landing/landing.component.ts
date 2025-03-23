import { Component ,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';
import { RouterOutlet,RouterLink } from '@angular/router';
import { RouterModule,Router  } from '@angular/router';
import { WebProductsComponent } from "../web-products/web-products.component";
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, WebProductsComponent,FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  @ViewChild('loginFrm') loginFrm!: NgForm;
  @ViewChild('registerFrm') registerFrm!: NgForm;
  categoryList: any []= [];
  productList: any[] = [];
  cartList: any[] = [];

  loggedInObj: any = {};
  displayModalLogin: boolean = false;
  displayModalRegistration: boolean = false;
  displayModalProfile: boolean = false;
  rememberMe: boolean = false;
  showLoginPassword: boolean = false;
  showRegisterPassword: boolean = false;
  showProfilePassword: boolean = false;
  isApiCallInProgress: boolean = false;
  phonePattern: string = "^((\\+91-?)|0)?[0-9]{10}$";
  passwordPattern: any = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\#?!@$%^&*\-])/;
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
openLoginModal() {
  this.displayModalLogin = true;
}

closeLoginModal() {
  this.displayModalLogin = false;
  if (!this.rememberMe) {
    this.loginFrm.resetForm();
    this.rememberMe = false;
  } else {
    this.rememberMe = true;
  }
}

openRegisterModal() {
  this.displayModalRegistration = true;
}

closeRegisterModal() {
  this.displayModalRegistration = false;
  this.registerFrm.resetForm();
}
onEyeClick() {
  this.showLoginPassword = !this.showLoginPassword;
}
}
