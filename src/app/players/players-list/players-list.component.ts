import { Component, OnInit, } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  allPlayers: Player[];

  constructor(private playerService: PlayerService) {
    this.allPlayers = new Array<Player>();
  }

  ngOnInit(): void {
    this.allPlayers = this.playerService.getPlayers();
  }


}
