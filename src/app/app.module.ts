import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JouerComponent } from './jouer/jouer.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JeuDeDes } from './model/jeDeDes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JouerComponent,
    StatistiquesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'jouer', component: JouerComponent},
      {path: 'statistiques', component: StatistiquesComponent},
      {path: '', redirectTo: '/jouer', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  jeuDeDes = new JeuDeDes();
}
