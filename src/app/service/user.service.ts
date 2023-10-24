import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor( private http:HttpClient ) { }

  getAllUsers():Observable<User[]>{
    //return de chaque methode par default est observable 
    return this.http.get<User[]>(environment.baseURL)
  }

  deleteUser (user: User): Observable<User> {
    const url=environment.baseURL+'/'+ user.id;
    return this.http.delete<User>(url);
    }
    deleteUserID (id: any): Observable<User> {
      const url=environment.baseURL+'/'+ id;
      return this.http.delete<User>(url);
      }
    addUser(user: User): Observable<User> {
      console.log(user);
      
      return this.http.post<User>(environment.baseURL,user, this.httpOptions);}

  test(){
    return new Observable(
      ()=>{
        console.log("test");
      }
    )
  }
}
