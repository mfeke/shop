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
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

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


  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  submit() {
    let user = {
      email:this.emailFormControl.value,
      password:this.passwFormControl.value

    }

    this.authService.isSignIn(user).subscribe({
      next: data => {
        this.invild = false
        this.tokenStorage.saveToken(data.accessToken)
        this.tokenStorage.saveUser(data.id)
      },
      error: err => {
        if (err.status === 404) {
          this.invild = true
        }
      }
    })
  }
}
