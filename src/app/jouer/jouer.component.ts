import { Component, OnInit } from '@angular/core';
import { JeuDeDesService } from '../jeu-de-des/jeu-de-des.service';
import { Joueur } from '../model/joueur';
import { ResultatLancer } from '../model/resultatLancer';


enum PageState {
  New = 1,
  Playing
}

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})

export class JouerComponent implements OnInit {
  // <!-- beurk pour enum https://stackoverflow.com/a/48431641/1168342
  static readonly PageState = PageState;
  readonly PageState = JouerComponent.PageState;
  // beurk -->

  etatPage: PageState = PageState.New;

  erreur = '';
  readonly desUnicode = '⚀⚁⚂⚃⚄⚅';

  // champs du formulaire agissent sur cet objet
  model = new Joueur('Marie Antoinette');

  submitted = false;

  resultat: ResultatLancer = { nom: "", lancers: 0, reussites: 0, v1: 0, v2: 0, somme: 0, message: "" };

  onSubmit() {
    this.erreur = '';
    this.submitted = true;
    this.jeuDeDesService.demarrerJeu(this.model.nom)
      .subscribe({
        // complete: () => {},
        error: (error) => {
          this.erreur = error.message;
          console.log(`demarrerJeu échec: ${error.message}`);
        },
        next: () => {
          console.log("demarrerJeu succès");
          this.etatPage = PageState.Playing;
        },
      })
  }

  constructor(
    private jeuDeDesService: JeuDeDesService,
  ) { }

  ngOnInit(): void {
  }

  lancer() {
    try {
      this.resultat = this.jeuDeDesService.lancer(this.model.nom);
    } catch (error) {
      this.erreur = 'Erreur inconnue.';
    }
  }


}
