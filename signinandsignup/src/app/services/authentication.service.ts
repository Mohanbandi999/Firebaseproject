import { Injectable } from '@angular/core';
import { Auth,authState} from '@angular/fire/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,} from '@angular/fire/auth';
import {from,Observable, switchMap} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);
  constructor(private auth:Auth) { }

  login(email:string, password:string){
  return from(signInWithEmailAndPassword(this.auth,email,password));
  }
  logout(){
    return from(this.auth.signOut());
  }
  signUp(email:string,password:string){
    return from(createUserWithEmailAndPassword(this.auth,email,password));
  }

}
