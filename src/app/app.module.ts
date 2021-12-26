import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DemarrerJeuComponent } from './demarrer-jeu/demarrer-jeu.component';
import { JouerComponent } from './jouer/jouer.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JeuDeDes } from './model/jeDeDes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    DemarrerJeuComponent,
    JouerComponent,
    StatistiquesComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forRoot([
      {path: 'demarrerJeu', component: DemarrerJeuComponent},
      {path: 'jouer', component: JouerComponent},
      {path: 'statistiques', component: StatistiquesComponent},
      {path: '', redirectTo: '/demarrerJeu', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  jeuDeDes = new JeuDeDes();
}
