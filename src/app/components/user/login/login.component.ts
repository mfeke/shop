import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  hidePassword: boolean = true;

  user = {
    email: "",
    password: ""
  }


  invild = false
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  passwFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailTouched = false;
  passwTouched = false;

  onBlur(control: string) {
    if (control === 'email') {
      this.emailTouched = true;
    } else if (control === 'password') {
      this.passwTouched = true;
    }
  }

  onInput(control: string) {
    if (control === 'email' && this.emailTouched && this.emailFormControl.value === '') {
      this.emailFormControl.markAsTouched();
    } else if (control === 'password' && this.passwTouched && this.passwFormControl.value === '') {
      this.passwFormControl.markAsTouched();
    }
  }

  showEmailError(): boolean {
    return this.emailTouched && this.emailFormControl.invalid;
  }

  showPasswError(): boolean {
    return this.passwTouched && this.passwFormControl.invalid;
  }

 
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  submit() {

    this.authService.isSignIn(this.user).subscribe({
      next: data => {
        this.invild = false
        console.log(data)
        this.tokenStorage.saveToken(data.accessToken)
        this.tokenStorage.saveUser(data.id)
      },
      error: err => {
        if (err.status === 404) {
          this.invild = true
          console.log(this.invild)
        }
      }
    })
  }
}
