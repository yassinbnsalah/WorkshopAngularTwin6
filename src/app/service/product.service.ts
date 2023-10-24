import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products : Product[]=[
    { id: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10},
    { id: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
    { id: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
  ];
  constructor(private http : HttpClient) { }

  listProduct():Observable<Product[]>{
    return this.http.get<Product[]>(environment.baseURLProduct)
  }

  detailsProduct(id:any):Observable<Product>{
    return this.http.get<Product>(environment.baseURLProduct+"/"+id)
  }

  deleteProduct(id:any):Observable<Product>{
    return this.http.delete<Product>(environment.baseURLProduct+"/"+id)
  }
/*------------------------------*/
  getAllProducts(){
    return this.Products;
  }

  getNbProductsByLibelle(libelle:String){
    return this.Products.filter(product => product.libelle === libelle).length
  }
}
