import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../core/users/user/user.component';
import { UserDetailsComponent } from '../core/users/user-details/user-details.component';
import { ListUserComponent } from '../core/users/list-user/list-user.component';
import { DeleteUserComponent } from '../core/users/delete-user/delete-user.component';

const routes: Routes = [
  {path:"" , component:ListUserComponent},
  {path:"remove/:id" , component:DeleteUserComponent},
  {path:":id" , component:UserDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
