import { Component, OnInit } from '@angular/core';
import { JeuDeDesService } from '../jeu-de-des/jeu-de-des.service';
import { Joueur } from '../model/joueur';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  joueurs: IterableIterator<Joueur> | undefined;

  constructor(private jeuDeDes: JeuDeDesService) { console.log('constructor of Statistiques') }

  ngOnInit(): void {
    this.joueurs = this.jeuDeDes.joueurs;
  }

}
