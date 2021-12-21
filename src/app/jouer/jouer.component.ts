import { Component, OnInit } from '@angular/core';
import { JeuDeDes } from '../model/jeDeDes';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements OnInit {

  formulaireNouveauJoueur = this.formBuilder.group({
    nom: '',
  })

  constructor(
    private jeuDeDes: JeuDeDes,
    private formBuilder: FormBuilder,
    ) {}

  onSubmit(): void {
    // TODO: appel à l'opération système pour nouveau joueur

    console.info('Nouveau joueur', this.formulaireNouveauJoueur.value);
  }

  ngOnInit(): void {
  }

}
