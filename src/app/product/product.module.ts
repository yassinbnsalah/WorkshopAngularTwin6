import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../core/product/product/product.component';
import { DeleteProductComponent } from '../core/product/delete-product/delete-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    
  ]
})
export class ProductModule { }
