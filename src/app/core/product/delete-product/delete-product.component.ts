import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  constructor(private http: HttpClient, 
    private router : Router , 
    private activatedRoute : ActivatedRoute,
    private productService: ProductService){}

  ngOnInit(){
    this.productService.deleteProduct(this.activatedRoute.snapshot.params['id']).subscribe(()=>
    {
      console.log("product delete")
      this.router.navigate(['products/liste'])
     
    },(err)=>{
      console.error(err)
    })
  } 
  
}
