import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlayerService } from '../player.service';

import { Player } from '../player.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  public showModal : boolean = false;

  player: Player;
  id: number;

  constructor(private playerService: PlayerService, private route: ActivatedRoute) {
    this.player = new Player(0, '', '', '', 0, '', '', '', '', '', 0, '', '', '', '', '');
    this.id = -1;

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.player = this.playerService.getPlayerById(this.id);
      }
    );

  }

  displayedColumns: string[] = ['Matches', 'Result', 'Date'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  Matches: string;
  Result: string;
  Date: string;
  CurrentPlayers: playerName[];
}
export interface playerName {
  Name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Matches: 'Ethnikos Piraeus - Proodeytiki', Result: '1-1', Date: '01/10/20', CurrentPlayers: [
    {Name: 'Andreas Mkrtchyan'}, {Name: 'Dimitrios Roussis'}
  ]},
  {Matches: 'Ionikos Nikeas - Ethnikos Piraeus', Result: '2-0', Date: '08/10/20', CurrentPlayers: [
    {Name: 'Konstantinos Tegousis'}, {Name: 'Dimitrios Roussis'}
  ]},
  {Matches: 'Ethnikos Piraeus - Keratsini', Result: '1-2', Date: '15/10/20', CurrentPlayers: [
    {Name: 'Georgios Manalis'}, {Name: 'Konstantinos Tegousis'}
  ]},
  {Matches: 'Fostiras - Ethnikos Piraeus', Result: '0-0', Date: '22/10/20', CurrentPlayers: [
    {Name: 'Georgios Manalis'}, {Name: 'Andreas Mkrtchyan'}
  ]}

];


