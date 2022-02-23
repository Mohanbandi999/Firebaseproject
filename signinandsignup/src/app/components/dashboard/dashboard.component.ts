import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UsersService } from 'src/app/services/users.service';
import { ProfileUser } from 'src/app/models/user-profile';
import { getFirestore } from 'firebase/firestore'
import {
  collection,
  getDocs,
  doc,
  query,
  docData,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { MAT_MENU_DEFAULT_OPTIONS_FACTORY } from '@angular/material/menu/menu';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:any=[];
  iterableLogList:any=[];

  constructor(private router: Router,private userserv:UsersService) { }

  ngOnInit(): void {
     //this.userserv.getUsers().subscribe(data => {
     //  this.users = data.map(e => {
    //     return {
    //       uid: e.payload.doc.uid,
    //       mobile:e.payload.doc.get("mobile"),
    //       role:e.payload.doc.get("role"),
    //       email:e.payload.doc.get("email"),
    //       fullname:e.payload.doc.get("fullname"),
    //       username:e.payload.doc.get("username"),
    //     } as ProfileUser;
    //   })
    // });
  }
 
  addEmployee(){
    this.router.navigate(['/sign-up']);
  }
   async Getusers(){
   //let temp= this.userserv.getUsers();

   const db = getFirestore();
   let a=[];

    const querySnapshot =await getDocs(collection(db, "users")); //await
    querySnapshot.forEach((doc) => {
      this.users.push(doc.data());
     // console.log(doc.id, " => ", doc.data());
    //this.users=a;

   
   
  });
  
   // let iterableLogList = Object.values(this.users);
    console.log(this.users);
   }

   delete(id:any){}

   modify(id:any){}
  }
   


