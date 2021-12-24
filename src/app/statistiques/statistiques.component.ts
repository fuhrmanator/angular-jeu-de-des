import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { JeuDeDesService } from '../jeu-de-des/jeu-de-des.service';
import { Joueur } from '../model/joueur';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nom', 'lancers', 'lancersGagnes']
  joueurs: IterableIterator<Joueur> | undefined;
  dataSource = new MatTableDataSource(Array.from(this.jeuDeDes.joueurs));

  constructor(private jeuDeDes: JeuDeDesService) { }

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  ngOnInit(): void {
    this.joueurs = this.jeuDeDes.joueurs;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
