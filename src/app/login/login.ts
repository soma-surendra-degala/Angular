import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  isLoginMode = true;

  // Login
  email = '';
  password = '';

  // Register
  name = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode(mode: 'login' | 'register') {
    this.isLoginMode = mode === 'login';
  }

 login() {
  console.log('Login clicked', this.email, this.password);
  this.authService.login(this.email, this.password)
    .then(() => {
      localStorage.setItem('user', 'loggedin');
      this.router.navigate(['/home']);
    })
    .catch(error => alert('Login failed: ' + error.message));
}

register() {
  console.log('Register clicked', this.name, this.email, this.password, this.confirmPassword);
  
  if (this.password !== this.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  this.authService.signUp(this.email, this.password)
    .then((res) => {
      return this.authService.setUserData(res.user, this.name);
    })
    .then(() => {
      alert('Registered successfully!');
      this.toggleMode('login');
      this.name = this.email = this.password = this.confirmPassword = '';
    })
    .catch(error => alert('Registration failed: ' + error.message));
}
}
