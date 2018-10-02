import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PlayersComponent } from './players/players.component'
import { FixturesComponent } from './fixtures/fixtures.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const appRoutes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'fixtures', component: FixturesComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
