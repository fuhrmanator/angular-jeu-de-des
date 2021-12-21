import { Component, OnInit } from '@angular/core';
import { joueurs } from '../joueurs';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  joueurs = joueurs;

  constructor() { }

  ngOnInit(): void {
  }

}
