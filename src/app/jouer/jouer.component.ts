import { Component, Input, OnInit } from '@angular/core';
import { JeuDeDesService } from '../jeu-de-des/jeu-de-des.service';
import { Joueur } from '../model/joueur';
import { ResultatLancer } from '../model/resultatLancer';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})

export class JouerComponent implements OnInit {

  joueur$!: Observable<Joueur>;
  joueurs$!: Observable<Joueur[]>;

  erreur = '';
  readonly desUnicode = '⚀⚁⚂⚃⚄⚅';

  resultat: ResultatLancer = { nom: "", lancers: 0, reussites: 0, v1: 0, v2: 0, somme: 0, message: "" };

  constructor(
    private jeuDeDesService: JeuDeDesService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    const joueurId = this.route.snapshot.paramMap.get('nom')!;
    this.joueur$ = this.jeuDeDesService.getJoueur(joueurId);
    this.joueurs$ = this.jeuDeDesService.getJoueurs();
  }

  lancer(event: Event) {
    try {
      this.joueur$.subscribe({
        next: (joueur) => {
          this.resultat = this.jeuDeDesService.lancer(joueur.nom);
        },
        error: (err) => { console.log(err)}
      })
    } catch (error) {
      console.log(error);
      this.erreur = 'Erreur inconnue.';
    }
  }

  // click sur bouton pour choisir un joueur
  clickJoueur(nom: string) {
    this.joueur$ = this.jeuDeDesService.getJoueur(nom);
  }

}
