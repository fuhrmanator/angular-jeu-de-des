import { Component, OnInit } from '@angular/core';
import { JeuDeDesService } from '../jeu-de-des/jeu-de-des.service';
import { Joueur } from '../model/joueur';
import { ResultatLancer } from '../model/resultatLancer';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})

export class JouerComponent implements OnInit {

  readonly desUnicode = '⚀⚁⚂⚃⚄⚅';

  model = new Joueur('Marie Antoinette');

  submitted = false;

  resultat: ResultatLancer = { nom: "", lancers:0, reussites: 0, v1: 0, v2: 0, somme: 0, message: ""};

  onSubmit() {
    this.submitted = true;
    this.jeuDeDesService.demarrerJeu(this.model.nom);
  }

  constructor(
    private jeuDeDesService: JeuDeDesService,
    ) { }

  ngOnInit(): void {
  }

  lancer() {
    this.resultat = this.jeuDeDesService.lancer(this.model.nom);
  }

}
