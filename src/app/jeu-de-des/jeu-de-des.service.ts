import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JeuDeDes } from '../model/jeDeDes';

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

}
