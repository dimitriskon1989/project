import { Component, OnInit} from '@angular/core';
import { PlayerService } from './player.service';

import { Player } from './player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  selectedPlayer: Player;

  constructor(private playerService: PlayerService) {
    this.selectedPlayer = new Player(0, '', '', '', 0, '', '', '', '', '', 0, '', '', '', '', '');
  }

  ngOnInit(): void {
    this.playerService.playerSelected.subscribe(
      (player: Player) => {
        this.selectedPlayer = player;
      }
    );
  }

}
