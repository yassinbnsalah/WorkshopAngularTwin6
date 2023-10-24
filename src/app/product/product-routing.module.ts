import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../core/product/product/product.component';
import { ListProductsComponent } from '../core/product/list-products/list-products.component';
import { DeleteProductComponent } from '../core/product/delete-product/delete-product.component';
import { ProductResolverResolver } from '../core/product/product-resolver.resolver';

const routes: Routes = [ 
  {path:"liste" , component:ListProductsComponent},
  {path:":id" , component:ProductComponent},
  {path:"remove/:id" , component:DeleteProductComponent}
  //{path:"" , component:ProductComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
