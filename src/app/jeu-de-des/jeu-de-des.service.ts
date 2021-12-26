import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JeuDeDes } from '../model/jeDeDes';
import { Joueur } from '../model/joueur';

@Injectable({
  providedIn: 'root'
})
export class JeuDeDesService {

  jeuDeDes: JeuDeDes = new JeuDeDes();

  constructor() {}

  public get joueurs() {
    return this.jeuDeDes.joueurs;
  }

  public demarrerJeu(nom: string): Observable<void> {
    return new Observable(observer => {
        this.jeuDeDes.demarrerJeu(nom);
        observer.next();
    })
  }

  public lancer(nom: string) {
    return this.jeuDeDes.jouer(nom);
  }

  getJoueurs(): Observable<Joueur[]> {
    return of(Array.from(this.joueurs));
  }

  getJoueur(id: string): Observable<Joueur> {
    return of(this.jeuDeDes.getJoueur(id)!);
  }

}
