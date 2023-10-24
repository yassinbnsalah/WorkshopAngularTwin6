import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
  tab=["a" , "b"]
  showTab(){
    console.log(this.tab);
    
    return this.tab ;
  }

  addElementToTab(element:any){
    this.tab.push(element)
    console.log(this.tab);
    
  }
}
