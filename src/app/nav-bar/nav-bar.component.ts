import { Component, OnInit } from '@angular/core';
import { FirstService } from '../service/first.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'], 
  providers:[FirstService]   
})
export class NavBarComponent implements OnInit  {

  constructor(private s1: FirstService){}
  ngOnInit(): void {
 this.s1.showTab()
  }

}
