import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  constructor(private user:UserService ,
    private router : Router,
    private activatedRoute : ActivatedRoute){}

  ngOnInit(){
    console.log(this.activatedRoute.snapshot.params['id']);
    
    this.user.deleteUserID(this.activatedRoute.snapshot.params['id']).subscribe((d)=>
    {
      console.log("removed");
      
      this.router.navigate(["users"]);
    },
    (error) => {
      console.error('test',error)
      let stats = error.status;
      switch(stats){
        case 500 : alert("NO ")
      }
    },
     );
  }
}
