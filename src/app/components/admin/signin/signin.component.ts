import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  hidePassword: boolean = true;
  user = {
    email: "",
    password: ""
  }
  constructor(private authService:AuthService, private tokenStorage: TokenStorageService){}
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  submit() {
    this.authService.isSignIn(this.user).subscribe({
      next: data => {
        console.log(data)
        this.tokenStorage.saveToken(data.accessToken)
        this.tokenStorage.saveUser(data.id)
      }
    })
  }

}

