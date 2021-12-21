import { Injectable } from '@angular/core';
import { JeuDeDes } from '../model/jeDeDes';
import { Joueur } from '../model/joueur';

@Injectable({
  providedIn: 'root'
})
export class JeuDeDesService {

  jeuDeDes: JeuDeDes = new JeuDeDes();

  constructor() {
    this.jeuDeDes.demarrerJeu('Jean');
  }
  
  public get joueurs() {
    return this.jeuDeDes.joueurs;
  }
  
}
