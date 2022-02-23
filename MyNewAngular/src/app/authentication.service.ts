import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/employee.model';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
//import {  signInWithEmailAndPassword} from '@angular/fire/auth';






@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  authState:any;
  
  constructor(public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    //private auth: Auth
    ) { 
      //this.afAuth.authState.subscribe((auth=>{this.authState=auth;}
        
      this.afAuth.authState.subscribe(employee => {
        if (employee) {
          this.userData = employee;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('employee') || '{}');
         
        }
      })
    }

  loginwithusername(username:any, password:any){
      return this.afAuth.signInWithEmailAndPassword(username,password).then((Data)=>
     { this.authState=Data})
     .catch(error=>{
       console.log(error)
       throw error
     });
     } 
     signupuser(email:any,password:any){
      return this.afAuth.createUserWithEmailAndPassword(email,password).then((Data)=>
      { this.authState=Data})
      .catch(error=>{
        console.log(error)
        throw error
      });
      }   
      SetUserData(employee:any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`employee/${employee.uid}`);
        const userData: Employee = {
          id:employee.id,
          email: employee.email,
          username:employee.username,
          hiredate:employee.hiredate,
          role:employee.role,
          address:employee.address,
          fullname:employee.fullname,
          password:employee.password,
          mobile:employee.mobile,
          gender:employee.gender                    
          
        }
        return userRef.set(userData, {
          merge: true
        })
      }     
}

