import { Component, OnInit } from '@angular/core';
import { JeuDeDesService } from '../jeu-de-des/jeu-de-des.service';
import { Joueur } from '../model/joueur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demarrer-jeu',
  templateUrl: './demarrer-jeu.component.html',
  styleUrls: ['./demarrer-jeu.component.css']
})
export class DemarrerJeuComponent implements OnInit {

  erreur = '';

  // champs du formulaire agissent sur cet objet
  joueur = new Joueur('Marie Antoinette');

  submitted = false;

  onSubmit() {
    this.erreur = '';
    this.submitted = true;
    this.jeuDeDesService.demarrerJeu(this.joueur.nom)
      .subscribe({
        // complete: () => {},
        error: (error: { message: string; }) => {
          this.erreur = error.message;
          console.log(`demarrerJeu échec: ${error.message}`);
          this.submitted = false;
        },
        next: () => {
          console.log("demarrerJeu succès");
          // this.etatPage = PageState.Playing;
          // load new component
          this.router.navigate(['/jouer', { nom: this.joueur.nom }]);
        },
      })
  }

  constructor(
    private jeuDeDesService: JeuDeDesService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

}
