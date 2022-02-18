import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


//Register component
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

//Auth
import { AngularFireAuthModule } from "@angular/fire/compat/auth";



const routes: Routes = [
  
  { path: 'register', component: RegisterComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    EmployeeListComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    //registercomponent
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    //Auth
    AngularFireAuthModule,
    AngularFirestoreModule
  
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
