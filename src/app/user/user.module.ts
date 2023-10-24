import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { AccountsComponent } from '../core/users/accounts/accounts.component';
import { ListUserComponent } from '../core/users/list-user/list-user.component';

import { UserComponent } from '../core/users/user/user.component';
import { UserDetailsComponent } from '../core/users/user-details/user-details.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   
    AccountsComponent,
    ListUserComponent,
  
    UserComponent,
    UserDetailsComponent,
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
