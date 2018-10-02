import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    FixturesComponent,
    PagenotfoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
