import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'famcial-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showError: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.showError = false;
  }

  submitLoginForm(): void {
    this.authService.login(this.loginForm.value).subscribe((result) => {
      if (result.type === "success") {
        this.router.navigate(['home']);
      } else {
        this.showError = true;
      }
      console.log(result);
    });
    console.log(this.loginForm.value);
  }

  private createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      password: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }]
    });
  }

}
