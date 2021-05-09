import {EventEmitter} from '@angular/core';

import { Injectable } from '@angular/core';

import { Player } from './player.model';

@Injectable()
export class PlayerService {

    playerSelected = new EventEmitter<Player>();

    private allPlayers: Player[] = [
        new Player(100,'../../assets/photo/players-profil/Andreas Mkrtchyan.jpg', 'Andreas Mkrtchyan', 'May 1, 1988', 33,
                  'Greek, ', 'Armenian', '../../assets/photo/flags/greece.png', '../../assets/photo/flags/armenia.png',
                  'Right', 1.85, 'Center Defender', '', '../../assets/photo/positions/center-defenders.jpg', 'AE Kifisias',
                  '../../assets/photo/Teams-Logo/AE-Kifisias.png'),

        new Player(102, '../../assets/photo/players-profil/Dimitrios Roussis.jpg', 'Dimitrios Roussis', 'May 6, 1988', 33,
                  'Greek', '', '../../../assets/photo/flags/greece.png', '', 'Left', 1.90, 'Center Defender', '',
                  '../../../assets/photo/positions/center-defenders.jpg', 'Tilykratis Lefkadas',
                  '../../../assets/photo/Teams-Logo/Tilykratis-Lefkadas.png'),

        new Player(104, '../../../assets/photo/players-profil/Konstantinos Tegousis.jpg', 'Konstantinos Tegousis', 'Aug 8, 1991', 30,
                  'Greek', '', '../../../assets/photo/flags/greece.png', '', 'Right', 1.72, 'Center Midfielder', 'Defensive Midfielder',
                  '../../../assets/photo/positions/Center-Midfielders-&-Defensive-Midfielders.jpg', 'OF Ierapetras',
                  '../../../assets/photo/Teams-Logo/OF-Ierapetras.png'),

        new Player(106, '../../../assets/photo/players-profil/Georgios Manalis.jpg', 'Georgios Manalis', 'Dec 21, 1994', 27,
                  'Greek', '', '../../../assets/photo/flags/greece.png', '', 'Right', 1.82, 'Center Forward', 'Right/Left Winger',
                  '../../../assets/photo/positions/Center-Forwards-&-Right-Left-Wingers.jpg', 'Ionikos Nikeas',
                  '../../../assets/photo/Teams-Logo/Ionikos.png')
    ];

    constructor () {
    }

    getPlayers() {
        return this.allPlayers.slice();
    }

    getPlayerById(id: number) {
      for (let index = 0; index < this.allPlayers.length; index++) {
        if (this.allPlayers[index].id === id) {
          return this.allPlayers[index];
        }
      }
      return this.allPlayers[0];
    }
}
