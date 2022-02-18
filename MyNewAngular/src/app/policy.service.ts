import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Policy } from 'src/app/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
   
  constructor(private firestore: AngularFirestore ) { 
    
    
  }


  getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
}
createPolicy(policy: Policy){
  return this.firestore.collection('policies').add(policy);
}
updatePolicy(policy: Policy){
  delete policy.id;
  this.firestore.doc('policies/' + policy.id).update(policy);
}

deletePolicy(id: any){
  this.firestore.doc('policies/' + id).delete();
}}
