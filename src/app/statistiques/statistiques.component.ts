import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { JeuDeDesService } from '../jeu-de-des/jeu-de-des.service';
import { Joueur } from '../model/joueur';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  joueurs!: IterableIterator<Joueur>;
  joueurs$!: Observable<Joueur[]>;
  selectedId = '';

  constructor(private jeuDeDes: JeuDeDesService, private route: ActivatedRoute) { }

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  ngOnInit(): void {
    this.joueurs$ = this.route.paramMap.pipe(
      switchMap(params => {
        let nom = '';
        if (params.get('nom') != null) nom = params.get('nom')!;
        this.selectedId = nom;
        return this.jeuDeDes.getJoueurs();
      })
    )
    this.joueurs = this.jeuDeDes.joueurs;
  }

}
