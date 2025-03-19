import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginObg: any = {
  userName: '',
  password: ''

};
constructor(private router: Router) { }
onLogin() {
if(this.loginObg.userName == 'admin' && this.loginObg.password == 'admin') {
 this.router.navigateByUrl('/products');
}
else{
alert('Invalid username or password');
}
}
}
