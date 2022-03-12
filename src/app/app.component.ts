import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eshop1';
  person: string='mirja';
  age: number=23;
  address:any={street:'rue du ...', city:'Ariana'};
  hide:boolean= false;
  hideInter:boolean= false;
  activated:boolean=false;
  getEmail(){
    return this.person + '@gmail.com';
  }
  hideInterpolation(){
      this.hideInter= !this.hideInter;
  }
}
