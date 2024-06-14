import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user: any = {
    email: "",
    fullName: "",
    password: "",
    roles: ["admin"]
  }

  hidePassword: boolean = true;
  constructor(private authService: AuthService,) { }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  submit() {
    this.authService.isSignUp(this.user).subscribe({
      next: data => {
        console.log(data)
      

      }
    })
  }
}
