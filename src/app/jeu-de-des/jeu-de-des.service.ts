import { Injectable } from '@angular/core';
import { JeuDeDes } from '../model/jeDeDes';
import { Joueur } from '../model/joueur';

@Injectable({
  providedIn: 'root'
})
export class JeuDeDesService {

  jeuDeDes: JeuDeDes = new JeuDeDes();

  constructor() {
  }

  public get joueurs() {
    return this.jeuDeDes.joueurs;
  }

  public demarrerJeu(nom: string) {
    this.jeuDeDes.demarrerJeu(nom);
  }

  public lancer(nom: string) {
    return this.jeuDeDes.jouer(nom);
  }

}
