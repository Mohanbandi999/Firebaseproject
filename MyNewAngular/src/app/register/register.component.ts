import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm:any= FormGroup;
  loading = false;
  submitted = false;
  email:any;
  password:any
  constructor(private formBuilder: FormBuilder,
              private employeeservice:EmployeeService,
              private authenticationservice:AuthenticationService
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.employeeservice.createEmployee(this.registerForm.value);
    
    
  }
  Register(){
    this.authenticationservice.signupuser(this.registerForm.email, this.registerForm.password)
  }
  
}
