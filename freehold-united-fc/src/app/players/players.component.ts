import { Component, OnInit } from '@angular/core';
import { Player } from '../core/services/player'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players = [
    new Player(1, 'Enrique', 'Lopez', 'Midfielder', 7, 3, 1, 'assets/images/kaka.jpg'),
    new Player(2, 'Cesar', 'Lopez', 'Striker', 11, 1, 1, 'assets/images/carlos-vela.jpg'),
    new Player(3, 'Juan', 'Lopez', 'Defender', 9, 10, 2, 'assets/images/Carlos-salcido.jpg' ),
    new Player(4, 'Jose', 'Cerejido', 'Midfielder', 10, 7, 2 'assets/images/unknown-person.jpg')
  ]


  constructor() { }

  ngOnInit() {
    console.log('player:' , this.players)
  }

}
