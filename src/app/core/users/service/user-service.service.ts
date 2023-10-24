import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor( private http:HttpClient) {}

  getUserList():Observable<User[]>{
    //return de chaque methode par default est observable 
    return this.http.get<User[]>(environment.baseURL)
  }
  getUserByID(id:any):Observable<User>{
    return this.http.get<User>(environment.baseURL+id)
  }
}
