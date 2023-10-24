import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id : any ;
  user = new User() ; 
  constructor(private service : UserServiceService,private activatedRouter:ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params["id"]
    //console.log("ID TO UPDATE"+this.id);
    
    this.service.getUserByID(this.id).subscribe((d)=>{
      //console.log(d)

      //this.user = <User>d ; 
      this.user = d
    })
  }
}
