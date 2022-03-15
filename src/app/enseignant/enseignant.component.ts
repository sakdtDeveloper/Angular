import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
   question: string | undefined;
   response: string | undefined;
   message: string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.question='Quel est le langage de programmation est utilise dans une application Angular?';
    this.response='Typescript';
  }

  correction(res: string){
    if(this.response===res){
      this.message='Bravo';
    }else {
      this.message='echec';
    }
  }
}
