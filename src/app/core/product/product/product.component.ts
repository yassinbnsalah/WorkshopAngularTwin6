import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product = new Product ; 
  constructor(private http: HttpClient, private service : ProductService,
    private activatedRoute : ActivatedRoute, private router : Router){}


  ngOnInit(): void {
    this.service.detailsProduct(this.activatedRoute.snapshot.params['id']).subscribe((d)=>
    {
      console.log(d)
      this.product = d   
    })
  } 

  GoBack(){
    this.router.navigate(['/products/liste'])
  }
  
}
