import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm:any= FormGroup;
  username:any;
  password:any;
  
    loading = false;
    submitted = false;
    returnUrl:any;
  constructor(private formBuilder: FormBuilder,
    private authenticationservice:AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  Login() {
    this.authenticationservice.loginwithusername(this.username, this.password)
    
  }


}
