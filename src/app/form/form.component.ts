import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User | undefined;
  constructor() { }

  ngOnInit(): void {
    this.user=new User();
  }

  save(f: NgForm){
    this.user=f.value
    console.log(this.user)
  }

}
