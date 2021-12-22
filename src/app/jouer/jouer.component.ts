import { Component, OnInit } from '@angular/core';
import { JeuDeDesService } from '../jeu-de-des/jeu-de-des.service';
import { Joueur } from '../model/joueur';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements OnInit {

  model = new Joueur('Marie Antoinette');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.jeuDeDesService.demarrerJeu(this.model.nom);
  }

  constructor(
    private jeuDeDesService: JeuDeDesService,
    ) { }

  ngOnInit(): void {
  }

}
