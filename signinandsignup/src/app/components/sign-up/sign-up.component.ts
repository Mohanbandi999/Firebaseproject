import { Component, OnInit } from '@angular/core';
import {  
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('', [Validators.email,Validators.required]),
    password: new FormControl('', Validators.required)
  })
  
  constructor(private authService: AuthenticationService,private toast: HotToastService, private router: Router,
    private usersService: UsersService) { }

  ngOnInit(): void {}

  get name(){
    return this.signUpForm.get('name');
  }
  get email(){
    return this.signUpForm.get('email');
  }
  get password(){
    return this.signUpForm.get('password');
  }
  submit(){
    if (!this.signUpForm.valid) {
      return
    }

    
    const{name, email, password}=this.signUpForm.value;
    this.authService.signUp(email,password).pipe(
      switchMap(({user:{uid}})=>this.usersService.addUser({uid,email,displayName:name})),
      this.toast.observe({
        success:'Congrats ! you are signed up',
        loading:'sigining in',
        error:({message})=> '${message}'
      })
      ).subscribe(() => {
        this.router.navigate(['/dashboard']);
      })
    }
}
