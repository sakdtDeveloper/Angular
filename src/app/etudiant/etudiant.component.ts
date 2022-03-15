import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

 @Input() questiondeMonenseignant: string | undefined;

 responseEtudiant: string | undefined;

 @Output() responsefinale= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  envoiResponse(){
    this.responsefinale.emit(this.responseEtudiant);
  }
}
