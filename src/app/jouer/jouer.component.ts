import { Component, OnInit } from '@angular/core';
import { JeuDeDesService } from '../jeu-de-des/jeu-de-des.service';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements OnInit {

  constructor(
    private jeuDeDesService: JeuDeDesService,
    ) {}

  ngOnInit(): void {
  }

  demarrerJeu(nom: string) {
    this.jeuDeDesService.demarrerJeu(nom);
  }
}
