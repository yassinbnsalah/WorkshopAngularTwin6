import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-list-user',
 
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users!:User[] ;
  listUsers !:any ;
  user = new User; 
  firstName = "" ; 
  lastName !: string ;
  constructor(private service : UserService, private router : Router){}
  ngOnInit(): void {
    this.service.getAllUsers().subscribe((d)=>
    {
      console.log(d)
      this.users = d   
    })
  } 
  
  addUser(){
    console.log(this.user);
    this.service.addUser(this.user);
  }

  deleteUser(u:User){
    console.log("user to delete"+u)
    this.service.deleteUser(u).subscribe();
    this.users = this.users.filter(item => item.id !== u.id);
  }
  deleteUserByID(id:any){
    this.router.navigate(['users/remove/',id])
  }
  //constructor(private service:UserServiceService){}

  /*ngOnInit(): void {
   
   this.service.getUserList().subscribe((d)=>
    {
      console.log(d)
      this.users = d
    })
    
  }*/
  


}
