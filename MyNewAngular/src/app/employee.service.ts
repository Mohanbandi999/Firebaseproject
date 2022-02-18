import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Employee } from 'src/app/employee.model';


import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
//import { Auth, signInWithEmailAndPassword} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  authState:any;
  constructor(private firestore: AngularFirestore,
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    //private auth: Auth

    ) { }


  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();

  }
  

  createEmployee(employee: Employee){
    return this.firestore.collection('employees').add(employee);
  }
  updateEmployee(employee: Employee){
    delete employee.id;
    this.firestore.doc('employees/' + employee.id).update(employee);
  } 
  deleteEmployee(employeeId: string){
    this.firestore.doc('employees/' + employeeId).delete();
} 

signupuser(email:any,password:any){
  return this.afAuth.createUserWithEmailAndPassword(email,password).then((Data)=>
  { this.authState=Data})
  .catch(error=>{
    console.log(error)
    throw error
  });
  }   


}
