import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { StorageService } from '../../../services/Storage.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    password: null,
    roles: [1],
    age: 25,
    Active: true,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { name, email, password, roles, age } = this.form;

    this.authService.register(name, email, password, roles, age).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);

        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = err.error
          ? err.error.message
          : 'An error occurred during registration';
        this.isLoginFailed = true;
      },
    });
  }
}
