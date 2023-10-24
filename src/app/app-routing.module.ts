import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './core/home/home/home.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"users" , loadChildren : () =>
      import("./user/user.module").then(m=>m.UserModule)},
  {path:'products' , loadChildren : () =>
    import("./product/product.module").then(m=>m.ProductModule)},
  {path:'providers' , loadChildren:() =>
    import("./provider/provider.module").then(m=>m.ProviderModule)},
  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
