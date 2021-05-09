import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesComponent } from './coaches/coaches.component';

import { HomeComponent } from './home/home.component';

import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayersComponent } from './players/players.component';
import { SupportComponent } from './support/support.component';
import { TeamComponent } from './team/team.component';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'players', component: PlayersComponent, children: [
    {path: '', component: PlayersListComponent},
    {path: ':id', component: PlayerDetailsComponent},
  ]},
  {path: 'coaches', component: CoachesComponent},
  {path: 'support', component: SupportComponent},
  {path: 'team', component: TeamComponent},
  {path: 'auth', component: AuthComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


