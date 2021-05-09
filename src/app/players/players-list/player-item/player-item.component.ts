import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../player.model';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {

  @Input() player: Player;

  constructor(private route: Router) {
    this.player = new Player(0, '', '', '', 0, '', '', '', '', '', 0, '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  getCurrentPlayer(idCode: number) {
    this.route.navigate(['/players', idCode]);
  }

}
