import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent{
  
  ListProduct!:Product[]
  ngLibelle!:number ;
  constructor(private productService : ProductService,
    private router : Router){

  }
  
  

    ngOnInit(): void {
     this.productService.listProduct().subscribe((d)=>{
      this.ListProduct = d;
      console.log(this.ListProduct);
      
     }) ; 
  }

  GoToDetails(id:any){
    this.router.navigate(['/products/',id]);
  }
  
  GoToDelete(id : any){
    this.router.navigate(['/products/remove/',id])
  }


  /*getNbLibelle(libelle:String){
    this.ngLibelle = this.productService.getNbProductsByLibelle(libelle);
    console.log(this.ngLibelle);
    
  }*/
}
